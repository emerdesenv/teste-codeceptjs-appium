const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');

require('dotenv').config();

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/e2e/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      'appiumV2': true,
      'app': process.env.APP,
      'platform': 'android',
      'device': 'emulator',
      'host': '127.0.0.1',
      'protocol': "http",
      'port': 4723,
      'path': "/",
      desiredCapabilities: {
        'appPackage': process.env.PACKAGE == 'Android' ? process.env.PACKAGE : '',
        'deviceName': process.env.DEVICE,
        'platformName': process.env.PLATFORM,
        'platformVersion': process.env.VERSION,
        'automationName': 'UIAutomator2'
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login.js"
  },
  name: 'teste-codeceptjs-appium'
}