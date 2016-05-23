---
title: Environment Setup
---

## Node.js

[Node.js](https://nodejs.org/) v4.0 or higher.

## iOS

Xcode v7.3 or higher is required.

[ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) is needed in order to testing WebViews.

```shell
$ brew install ios-webkit-debug-proxy
```

## Android

0. [Install the latest JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
0. Install the Android SDK, run `brew install android-sdk`
0. Set the `ANDROID_HOME` environment variable to your `~/.bashrc`, `~/.bash_profile`, `~/.zshrc` or whatever your shell uses:

```shell
## if you have installed the SDK via Homebrew
export ANDROID_HOME = /usr/local/opt/android-sdk

## otherwise
export ANDROID_HOME = path/to/your/Android/sdk
```

## Macaca

### Global Installation

```shell
$ npm i -g macaca-cli
```

If you saw the picture below, congratulations! Macaca has been installed successfully!

![](https://os.alipayobjects.com/rmsportal/zSmLbyWUarTabaP.png)

### Local Installation

```shell
$ npm install macaca-cli

# start Macaca
$ ./node_modules/.bin/macaca run
```

### Driver Installation

| Platform   | Version                                  | Status    |
| ---------- | ---------------------------------------- | --------- |
| Android    | [![NPM version][npm-image-0]][npm-url-0] | [![build status][travis-image-0]][travis-url-0]          |
| Chrome     | [![NPM version][npm-image-1]][npm-url-1] | [![build status][travis-image-1]][travis-url-1]          |
| Electron   | [![NPM version][npm-image-2]][npm-url-2] | [![build status][travis-image-2]][travis-url-2]          |
| iOS        | [![NPM version][npm-image-3]][npm-url-3] | [![build status][travis-image-3]][travis-url-3]          |

[npm-image-0]: https://img.shields.io/npm/v/macaca-android.svg?style=flat-square
[npm-url-0]: https://npmjs.org/package/macaca-android
[npm-image-1]: https://img.shields.io/npm/v/macaca-chrome.svg?style=flat-square
[npm-url-1]: https://npmjs.org/package/macaca-chrome
[npm-image-2]: https://img.shields.io/npm/v/macaca-electron.svg?style=flat-square
[npm-url-2]: https://npmjs.org/package/macaca-electron
[npm-image-3]: https://img.shields.io/npm/v/macaca-ios.svg?style=flat-square
[npm-url-3]: https://npmjs.org/package/macaca-ios

[travis-image-0]: https://img.shields.io/travis/macacajs/macaca-android.svg?style=flat-square
[travis-url-0]: https://travis-ci.org/macacajs/macaca-android
[travis-image-1]: https://img.shields.io/travis/macacajs/macaca-chrome.svg?style=flat-square
[travis-url-1]: https://travis-ci.org/macacajs/macaca-chrome
[travis-image-2]: https://img.shields.io/travis/macacajs/macaca-electron.svg?style=flat-square
[travis-url-2]: https://travis-ci.org/macacajs/macaca-electron
[travis-image-3]: https://img.shields.io/travis/macacajs/macaca-ios.svg?style=flat-square
[travis-url-3]: https://travis-ci.org/macacajs/macaca-ios

```shell
$ macaca install ios
```

### Environment

Let's check the version and verify the environment.

```shell
# show version
$ macaca -v

# verify environment
$ macaca doctor
```

## Try it now!

Are you ready to enter into the Macaca world? [Let's have a try!](./getting-started.html)
