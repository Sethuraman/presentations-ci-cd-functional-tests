FROM node:6.10.3

ENV SERVERLESS_VERSION 1.25.0

RUN apt-get update && \
    apt-get install -y \
      build-essential \
      curl \
      jq \
      python-dev && \
    mkdir /root/.aws && \
    curl -s https://bootstrap.pypa.io/get-pip.py | python && \
    pip install \
      awscli \
      boto3 \
      pep8 \
      pytest \
      pytest-cov \
      pytest-mock

RUN npm install \
    cfn-create-or-update@1.1.2 \
    serverless@${SERVERLESS_VERSION} \
    http-server \
    -g
