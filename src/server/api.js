import Express from 'express'
import {jsonResponse} from '../../config/http'
const Router = Express.Router()

// routes
Router.get('/recommendation', getRecommendation)

export default Router


// static data for demo
function getRecommendation(req, res){
    const {q} = req.query

    // get data from json
    let data = require('../../static_data/results')
    
    data = jsonResponse(200, 'success', {result: data})
    res.json(data)
}