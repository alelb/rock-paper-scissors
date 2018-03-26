const express = require('express')
const config = require('./config.js')

const app = express()

app.listen(config.server.port, config.server.host, () => {
    console.log(`Server running on port ${config.server.port}...`)
})