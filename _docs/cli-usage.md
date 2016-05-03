---
title: Macaca CLI Usage
---

## Installment

```shell
$ npm i -g macaca-cli
```

## Quick Start

### Run test tasks

```shell
# run test in current cwd
$ macaca run

# run test in a pointed directry and set a framework
$ macaca run -d ./test -f mocha

# output log file as html code
$ macaca run -o

# run in silence
$ macaca run --no-window
```

### Start server

```shell
# normal usage
$ macaca server

# set a port
$ macaca server -p 3456

# run in background
$ macaca server -p 3456 &
```

### Environment doctor

```shell
$ macaca doctor
```

### More Help

```shell
$ macaca -h

# helper for server
$ macaca server -h

# helper for how to run test
$ macaca run -h

# helper for environment doctor
$ macaca doctor -h
```

#### That's all, enjoy it!
