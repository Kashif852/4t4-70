'use strict'
const app = require('./express/server')

app.listen(process.env.PORT || 3000 ,()=>console.log('Server started at : 3000'))
