import Superagent from 'superagent'
import {jsonResponse} from '../../config/http'

export default function apiCaller(method = 'get', endpoint, params = {})
{
    return new Promise(resolve => {
        Superagent[method.toLowerCase()](endpoint)
        .query(params.query || {})
        .end((err, res) => { 
            let json
            // error
            if(err) json = jsonResponse(500)
            // get response
            json = res.body

            resolve(json)
        })
    })
}