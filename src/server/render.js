import React from 'react'
import ReactDomServer from 'react-dom/server'
import Routes from '../client/routes'
import {StaticRouter} from 'react-router'
import {renderRoutes, matchRoutes} from 'react-router-config'

export default ((req, res, next) => {
    let context = {}
    const html = ReactDomServer.renderToString(
        <StaticRouter 
            location={req.url}
            context={context}>
            {renderRoutes(Routes)}
        </StaticRouter>
    )
    if (context.url) {
        res.status(500).end('internal server error')
    } else {
        //render html + preloaded state
        res.send(renderHtml(html, {}))
    }
})

function renderHtml(html: string, state: Object={}):string 
{
    return html
}