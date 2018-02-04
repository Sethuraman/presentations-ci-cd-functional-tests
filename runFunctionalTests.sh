#!/usr/bin/env bash
set -e

trap 'docker-compose rm -f' EXIT

docker-compose up --abort-on-container-exit
exitCode=$(docker-compose ps -q | xargs docker inspect -f '{{ .State.ExitCode }}' | grep -v 0 | wc -l | tr -d ' ')
if [ "$exitCode" -eq "1" ]; then
	exit 1
else
	exit 0
fi