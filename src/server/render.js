import React from 'react'
import ReactDomServer from 'react-dom/server'
import Routes from '../client/routes'
import {StaticRouter} from 'react-router'
import {renderRoutes, matchRoutes} from 'react-router-config'
import Helmet from 'react-helmet'

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
    return (`
        <!DOCTYPE HTML>
        <html>
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            ${(Helmet.rewind()).title.toString()}
            ${(Helmet.rewind()).meta.toString()}
            ${(Helmet.rewind()).link.toString()}
        </head>
        <body>
            <div id="app">${html}</div>
        </body>
        </html>
    `).replace(/\s\s+/g, '')
}