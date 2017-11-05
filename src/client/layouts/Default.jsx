import React, {PureComponent} from 'react' 
import { renderRoutes } from 'react-router-config'

export default class DefaultLayout extends PureComponent 
{
    render()
    {
        return(
            <div className='wrapper'>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}