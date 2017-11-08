import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends PureComponent 
{
    render()
    {
        return(
            <nav className='main'> 
                <div className='container'> 
                    <div className='grid'> 
                        <div className='col-3 logo'> 
                            <Link to='/' title='Logo Birokrasi Mudah'>
                                <img src='/images/whitelogo.png' />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
          
        )
    }
}
