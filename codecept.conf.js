const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
    tests: './*_test.js',
    output: './output',
    helpers: {
        Appium: {
            platform: process.env.PLATFORM,
            app: process.env.APP,
            desiredCapabilities: {
                appPackage: process.env.PACKAGE == 'Android' ? process.env.PACKAGE : '',
                appActivity: process.env.PACKAGE == 'Android' ? process.env.ACTIVITY : '',
                deviceName: process.env.DEVICE,
                platformVersion: process.env.VERSION
            }
        }
    },
    include: {
        I: './steps_file.js'
    },
    name: 'teste-codeceptjs-appium'
}