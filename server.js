const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Me when I deploy a project.')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

module.exports = app;