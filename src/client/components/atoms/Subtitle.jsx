import React from 'react'

export default (props) => {
    return (
        <div className='grid'> 
            <div className='col-12'>
                <div className='subtitle'> 
                    <h3 className='title'>{props.title}</h3>
                    <p>{props.subtitle}.</p>
                </div>
            </div>
        </div>
    )
}