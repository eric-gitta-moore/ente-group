#!/bin/bash
export WORKDIR=./workspace/ente
git clone https://github.com/ente-io/ente.git $WORKDIR
cp -rfv ./builder/* $WORKDIR