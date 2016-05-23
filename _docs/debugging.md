---
title: Debugging
---

## launch server only

```shell
$ macaca server --verbose
```

## REPL

```shell
# go into REPL environment
$ node
```

## Devtool

```shell
$ npm i -g devtool
$ devtool
```

![](http://ww3.sinaimg.cn/mw690/3fb01b8agw1f2m0n619wpj21d019aaey.jpg)

```javascript
// run sample code
> const wd = require('wd');
> const driver = wd.promiseChainRemote({
    host: 'localhost',
    port: 3456
  });

> driver.init({
    platformName: 'ios',
    platformVersion: '9.3',
    deviceName: 'iPhone 6s',
    app: 'path/to/app'
  });
```

[More About Devtool](https://github.com/Jam3/devtool)
