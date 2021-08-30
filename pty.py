#!/usr/bin/env python

from sys import argv
from invoke import run

with open(argv[1]) as f:
    cmds = f.readlines()

for x in cmds:
    run(
        x.strip(),
        pty=True,
        echo=True
    )
