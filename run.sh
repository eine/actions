#!/usr/bin/env sh

docker run --rm -tv $(pwd):/src -w /src python:3.8-slim-buster bash -c "$(cat $1)"
