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

```bash
## if you have installed the SDK via Homebrew
export ANDROID_HOME = /usr/local/opt/android-sdk

## otherwise
export ANDROID_HOME = path/to/your/Android/sdk
```

## Macaca

```shell
$ npm i -g macaca-cli
```

If you saw the picture below, congratulations! Macaca has been installed successfully!

![](https://os.alipayobjects.com/rmsportal/zSmLbyWUarTabaP.png)

Let's check the version and verify the environment.

```shell
# show version
$ macaca -v

# verify environment
$ macaca doctor
```

## Try it now!

Are you ready to enter into the Macaca world? [Let's have a try!](./getting-started.html)
