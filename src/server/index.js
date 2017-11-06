import Express from 'express'
import Render from './render'
import Path from 'path'
const PORT = 8080
const App = Express()

App.use('/bundle', Express.static(Path.resolve(__dirname + '/../../bundle')))
App.use('/css', Express.static(Path.resolve(__dirname + '/../../public/css')))
App.use('/images', Express.static(Path.resolve(__dirname + '/../../public/images')))
App.use('/js', Express.static(Path.resolve(__dirname + '/../../public/js')))
App.use('/libraries', Express.static(Path.resolve(__dirname + '/../../public/libraries')))
App.get('/', Render)

App.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})