import Express from 'express'
import Render from './render'
import Api from './api'
import Path from 'path'
const PORT = process.env.PORT || 5000
const App = Express()

App.use('/bundle', Express.static(Path.resolve(__dirname + '/../../bundle')))
App.use('/css', Express.static(Path.resolve(__dirname + '/../../public/css')))
App.use('/images', Express.static(Path.resolve(__dirname + '/../../public/images')))
App.use('/js', Express.static(Path.resolve(__dirname + '/../../public/js')))
App.use('/libraries', Express.static(Path.resolve(__dirname + '/../../public/libraries')))
App.use('/api', Api)
App.use('/', Render)

App.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})