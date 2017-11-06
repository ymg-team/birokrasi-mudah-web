import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

const App = () => (
    <BrowserRouter>
        {renderRoutes(routes)}
    </BrowserRouter>
  )

ReactDOM.render(<App />, document.getElementById('app'))