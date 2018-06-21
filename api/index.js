var express = require('express')
var path = require('path')

express()
    .use(express.static(path.join(__dirname, '..', 'build')))
    .listen(process.env.PORT || 3000, () => console.log('application running on 3000'))