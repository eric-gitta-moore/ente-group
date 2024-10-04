#!/bin/bash
export WORKDIR=./workspace/ente
git clone --recursive https://github.com/ente-io/ente.git $WORKDIR
cp -rfv ./builder/* $WORKDIR