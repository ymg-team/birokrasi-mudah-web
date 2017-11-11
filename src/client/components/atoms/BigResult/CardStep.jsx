import React from 'react'

export default (props) => (
    <div style={props.is_last ? {marginBottom: '2em'} : {}} className='grid-center'> 
        <div className='col-8_md-12_sm-12'>
            <div className='big-result-card m-0'>
            <div className='big-text'> 
                <div className='big-text-left'>
                <input className='btn btn-white' type='checkbox' />
                </div>
                <div className='big-text-right'>{props.text}</div>
            </div>
            </div>
        </div>
    </div>
)