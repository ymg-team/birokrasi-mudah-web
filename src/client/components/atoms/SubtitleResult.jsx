import React from 'react'

export default (props) => (
    <div className='grid-center'> 
        <div className='col-8_md-12_sm-12'>
            <div className='title'> 
                <h2>{props.title}</h2>
                <small>{props.subtitle}</small>
            </div>
        </div>
    </div>
)