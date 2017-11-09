import Express from 'express'
import {jsonResponse} from '../../config/http'
import {find} from 'lodash'

const Router = Express.Router()

// routes
Router.get('/recommendation', getRecommendation)
Router.get('/hasil/:title', getResult)

export default Router


// get recomendation by keyword
function getRecommendation(req, res)
{
    const {keyword} = req.query
    const smartSearch = require('smart-search')
    const patterns = keyword.split(' ')
    const fields = {keyword: true, id: true}
    const entries = require('../../static_data/recommendation')

    //result
    const results = smartSearch(entries, patterns, fields);
    if(results.length == 0) return res.status(201).json(jsonResponse(204))

    // join with available data
    const availableData = require('../../static_data/results')
    
    //response recommentaions
    let addedId = []
    let recommendation = []
    results.forEach( function (n) {
        if(!addedId.includes(n.entry.id))
        {
            addedId.push(n.entry.id)
            recommendation.push(find(availableData, (m) => {
                return m.id == n.entry.id
            }))
        }
    });

    // get data from json
    return res.status(200).json(jsonResponse(200, 'success', {result: recommendation}))
}

// get result by id
function getResult(req, res)
{
    const {title} = req.params
    const titleSplit = title.split('-') 
    const id = titleSplit[titleSplit.length - 1]
    let data, result

    data = require('../../static_data/results')
    // find data by id
    result = find(data, (n) => {
        return n.id == id
    })
    if(!result) 
        data = jsonResponse(204)
    else 
        data = jsonResponse(200, 'success', result)
    
    return res.status(200).json(data)
}