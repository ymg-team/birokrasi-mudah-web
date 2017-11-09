import Express from 'express'
import {jsonResponse} from '../../config/http'
const Router = Express.Router()

// routes
Router.get('/recommendation', getRecommendation)
Router.get('/hasil/:title', getResult)

export default Router


// static data for demo
function getRecommendation(req, res)
{
    const {q} = req.query

    // get data from json
    let data = require('../../static_data/results')

    data = jsonResponse(200, 'success', {result: data})
    res.json(data)
}

function getResult(req, res)
{
    const {title} = req.params
    const titleSplit = title.split('-') 
    const id = titleSplit[titleSplit.length - 1]
    console.log(id)

    let data = require('../../static_data/results')
    data = jsonResponse(200, 'success', {result: data})
    res.json(data)
}