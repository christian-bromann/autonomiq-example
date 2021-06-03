exports.config = {
    specs: [__dirname + '/features/**/*.feature'],
    suites: {
        'My 1st test suite': [
            __dirname + '/features/**/*.feature'
        ]
    },
    logLevel: 'trace',
    reporters: ['spec'],
    capabilities: [{
        browserName: 'chrome'
    }],
    
    // mock WebDriver session creation endpoints so we don't need a browser
    // in CI/CD given all tests run on AutonomIQ
    services: ['webdriver-mock'],
    
    framework: 'autonomiq',
    autonomiqOpts: {
        project: 69,
        user: process.env.AUTONOMIQ_USERNAME, // AutonomIQ username
        key: process.env.AUTONOMIQ_KEY, // AutonomIQ password
    }
}
