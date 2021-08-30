#!/usr/bin/env python

from sys import argv
from invoke import run

run(
    " ".join(argv[1:]),
    pty=True,
    echo=True
)
