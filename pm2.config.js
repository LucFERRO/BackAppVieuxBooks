module.exports = {
    apps: [
        {
            name: 'AVB Api',
            script: './build/server.js',
            env_dev: {
                NODE_ENV: ""
            },
            env_test: {
                NODE_ENV: ".TEST"
            }
        }
    ]
}