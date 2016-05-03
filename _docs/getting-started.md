---
title: Getting Started
---

## Project structure

Project structure includes a folder called macaca-test, all your test files should be suffixed with .test.js.

Each test file will be executed synchronously.

```
.
├── ...
├── README.md
├── macaca-test
│   ├── testcase01.test.js
│   ├── testcase02.test.js
│   ├── testcase03.test.js
│   └── ...
└── package.json
```

## Testcase

The [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) interface provides methods like: describe(), it(), before(), after(), beforeEach(), and afterEach().

The snippet below is the recommended way to write your testcase.

```js
describe('macaca test sample', function() {

  ...

  it('#1 should login successfully', function() {
    return driver
      .login('12345678', '111111')
      .sleep(1000);
  });

  ...

  it('#6 should works with web', function() {
    return driver
      .webview()
      .elementById('index-kw')
      .sendKeys('TesterHome')
      .elementById('index-bn')
      .tap()
      .sleep(5000)
      .source()
      .then(function(html) {
        html.should.containEql('TesterHome');
      })
      .takeScreenshot();
  });

  ...

});
```

All the implementation are conformed to [Webdriver Spec](https://w3c.github.io/webdriver/webdriver-spec.html), API doc can be found in [link](//macacajs.github.io/macaca-wd/docs).

## Prepare Application

iOS: An valid iOS application package suffixed with `.app`.

Android: An valid Android application package suffixed with `.apk`.

## Run Macaca

```shell
$ macaca run --verbose
```

Further options could be found in [macaca-cli-command](./guide.html#/client-usage).

## Examples

Check out the sample located in this repo([macaca-test-sample](https://github.com/xudafeng/macaca-test-sample)), and enjoy it.

```
$ git clone git@github.com:xudafeng/macaca-test-sample.git
$ cd macaca-test-sample
$ npm install
$ macaca run --verbose
```

### iOS

![ios-screenshot](https://os.alipayobjects.com/rmsportal/AupRcQdJrzTdOnd.gif)

### Android

![android-screenshot](https://os.alipayobjects.com/rmsportal/pEWPOynHBBzleiJ.gif)

### Desktop

![desktop-screenshot](https://os.alipayobjects.com/rmsportal/hlSZRyFulWWbFdf.gif)
