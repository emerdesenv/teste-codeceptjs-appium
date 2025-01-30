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
            platform: 'Android',
            app: 'C:\\Users\emers\OneDrive\Documentos\app_qafood.apk',
            desiredCapabilities: {
                appPackage: 'com.qazandoqafood',
                appActivity: 'MainActivity',
                deviceName: 'emulator-5554',
                platformVersion: '9'
            }
        }
    },
    include: {
        I: './steps_file.js'
    },
    name: 'teste-codeceptjs-appium'
}