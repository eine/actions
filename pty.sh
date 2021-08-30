#!/usr/bin/env sh

/usr/bin/env python -m pip install invoke

$(dirname $0)/pty.py $1
