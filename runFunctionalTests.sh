#!/usr/bin/env bash
set -e
pwd

function fail {
  echo $1 >&2
  exit 1
}

function retry {
  local n=1
  local max=20
  local delay=15
  while true; do
    "$@" && break || {
      if [[ $n -lt $max ]]; then
        ((n++))
        echo "Command failed. Attempt $n/$max:"
        sleep $delay;
      else
        fail "The command has failed after $n attempts."
      fi
    }
  done
}

trap 'docker-compose -f ./functional-tests/docker-compose.yml rm -s -f' EXIT

docker-compose -f ./functional-tests/docker-compose.yml up -d

sleep 10

pushd functional-tests
trap 'docker-compose rm -s -f' EXIT
npm install

#wait for the service to come up
retry curl "http://localhost:3001/"

#wait for the webapp to come up
retry curl "http://localhost:3000"

LAUNCH_URL="http://localhost:3000" npm run test
exitCode=$?

popd
trap 'docker-compose -f ./functional-tests/docker-compose.yml rm -s -f' EXIT

exit $exitCode
