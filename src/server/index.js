import Express from 'express'
import Render from './render'
const PORT = 8080
const App = Express()

App.get('/', Render)

App.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}`)
})