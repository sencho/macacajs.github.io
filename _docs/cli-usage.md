---
title: Macaca CLI Usage
---

### Run test tasks

```shell
# run test in current cwd
$ macaca run --verbose

# run test in a pointed directry and set a framework
$ macaca run -d ./test -f mocha

# output log file as html code
$ macaca run -o

# run in silence
$ macaca run --no-window
```

### Start webdriver server only

```shell
# normal usage
$ macaca server --verbose

# set a port
$ macaca server -p 3456
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

```
