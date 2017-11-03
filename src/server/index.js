const app = require('express')()
const PORT = 8080

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}`)
})