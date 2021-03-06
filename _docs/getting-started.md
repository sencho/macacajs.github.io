---
title: Getting Started
---

## Project structure

Project structure includes a folder called `macaca-test`, all your test files should be suffixed with `.test.js`.

Each test file will be executed synchronously.

```
.
├── ...
├── README.md
├── macaca-test
│   ├── ...
│   ├── testcase01.test.js
│   ├── testcase02.test.js
│   ├── testcase03.test.js
│   └── ...
└── package.json
```

## Testcase

The [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) interface provides methods like: `describe()`, `it()`, `before()`, `after()`, `beforeEach()`, and `afterEach()`.

The snippet below is the recommended way to write your testcase.

```javascript
describe('Macaca test sample', function() {

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
      .sendKeys('Macaca')
      .elementById('index-bn')
      .tap()
      .sleep(5000)
      .source()
      .then(function(html) {
        html.should.containEql('Macaca');
      })
      .takeScreenshot();
  });

  ...

});
```

All the implementation are conformed to [WebDriver Spec](//w3c.github.io/webdriver/webdriver-spec.html), and all API docs can be found [here](//macacajs.github.io/macaca-wd/api/).

## Prepare application

iOS: An valid iOS application package suffixed with `.app`.

Android: An valid Android application package suffixed with `.apk`.

Desktop: All web application could be run with initial url.

## Run Macaca

```shell
$ macaca run
```

Further options could be found in [this document](./cli-usage.html).

## Examples

Check out the sample located in this repo([macaca-test-sample](https://github.com/macacajs/macaca-test-sample)), and enjoy it.

```shell
$ git clone https://github.com/macacajs/macaca-test-sample.git --depth=1
$ cd macaca-test-sample
$ npm i
$ macaca run --verbose
```

### iOS APP

{% include video.html url="https://os.alipayobjects.com/rmsportal/fyuMolxdSsGMlNw.mp4" %}

### Mobile Safari

{% include video.html url="https://os.alipayobjects.com/rmsportal/TDeTXmTfeqRlxhj.mp4" %}

### Android APP

{% include video.html url="https://os.alipayobjects.com/rmsportal/vjoZfJaZmCvInDv.mp4" %}

### Android Browser

{% include video.html url="https://os.alipayobjects.com/rmsportal/VoxFKOVDsOjKyMs.mp4" %}

### Desktop (Electron)

{% include video.html url="https://os.alipayobjects.com/rmsportal/bgBKHXYSrlYpuvv.mp4" %}
