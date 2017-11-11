import React from 'react'

const icons = {
    phone: 'fa fa-phone',
    web: 'fa fa-globe',
    facebook: 'fa fa-facebook',
    twitter: 'fa fa-twitter'
}

export default (props) => {
    return <div style={props.is_last ? {marginBottom: '2em'} : {}} className='grid-center'> 
        <div className='col-8_md-12_sm-12'>
            <div className='big-result-card m-0'>
            <div className='big-text'> 
                <div className='big-text-right'>
                    <i className={icons[props.type]} />
                    {' '}
                    {props.value}
                    <br/> 
                    <small>{props.desc}</small>
                </div>
            </div>
            </div>
        </div>
    </div>
}