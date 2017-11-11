import React from 'react'
import {Link} from 'react-router-dom'

export default(props) => (
    <div className='col-6_sm-12 card-result'>
        <div className='card-result-inside'>
            <div className='logo'> 
                <img src={props.logo} title={props.department} /></div>
            <div className='text'>
                <div className='text-title'>
                    <Link to={'/hasil/'+ (props.title.replace(/ /g,'-')) + '-' + props.id}>{props.title}</Link>
                </div>
                <div className='text-stats'>di {props.department}<br />dicari 3400x - oleh 234 pengguna </div>
            </div>
        </div>
    </div>
)