require('dotenv').config()
const Server = require('./models/server')
console.clear()
app = new Server(process.env.PORT)
