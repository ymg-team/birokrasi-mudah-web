import React, {PureComponent} from 'react'

export default class CardStep extends PureComponent
{
    render()
    {
        return(
            <div style={this.props.is_last ? {marginBottom: '2em'} : {}} className='grid-center'> 
                <div className='col-8_md-12_sm-12'>
                    <div className='big-result-card m-0'>
                    <div className='big-text'> 
                        <div className='big-text-left'>
                        <input className='btn btn-white' type='checkbox' />
                        </div>
                        <div className='big-text-right'>Foto kopi Kartu Keluarga (2 lembar) dan Fotokopi KTP (2 lembar)</div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}