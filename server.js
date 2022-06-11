const { https } = require('firebase-functions')
const { default: next } = require('next')
const config = require('./next.config.js')
const isDev = process.env.NODE_ENV !== 'production'

const server = next({
    dev: isDev,
    conf: { distDir: '.next' },
    config
})

const nextjsHandle = server.getRequestHandler();
//we will create our firebase function

exports.nextServer2 = https.onRequest((req, res) => {
    return server.prepare().
        then(() => {
            return nextjsHandle(req, res)
        })
})