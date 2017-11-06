import React, {PureComponent} from 'react' 
import { renderRoutes } from 'react-router-config'

export default class DefaultLayout extends PureComponent 
{
    render()
    {
        return(
            <div>
                {/* app wrapper */}
                <div className='wrapper' id='wrapper'>
                    {renderRoutes(this.props.route.routes)}
                </div>
                {/* modal */}
                <div className="modal" id="modal">
                    <div className="container"> 
                        <div className="grid">
                            <div className="col-12">
                                <div className="modal-title"> 
                                    <h1>this is title of modal</h1>
                                    <button className="btn-modal-close btn btn-white fa fa-close" onClick={() => modal.close()} title="Tampilkan berikutnya" type="button" style={{marginLeft: '1.5em'}} />
                                </div>
                                <div className="modal-content" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}