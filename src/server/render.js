import React from 'react'
import ReactDomServer from 'react-dom/server'
import Routes from '../client/routes'
import {StaticRouter} from 'react-router'
import {renderRoutes, matchRoutes} from 'react-router-config'
import webpackAssets from '../../config/webpack-assets'
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
            <link href="/css/style.css" rel="stylesheet">
            <link href="/libraries/font-awesome/css/font-awesome.min.css" rel="stylesheet">
            <link rel="manifest" href="/manifest.json">
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700" rel="stylesheet">
            ${(Helmet.rewind()).title.toString()}
            ${(Helmet.rewind()).meta.toString()}
            ${(Helmet.rewind()).link.toString()}
        </head>
        <body>
            <div id="app">${html}</div>
            <script src="/js/app.min.js"></script>
            <script src="${webpackAssets.vendor.js }"></script>
            <script src="${webpackAssets.app.js }"></script>
        </body>
        </html>
    `).replace(/\s\s+/g, '')
}