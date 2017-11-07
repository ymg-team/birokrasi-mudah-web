import React, {Component} from 'react'
import Recomendation from '../atoms/BigSearchRecomendation'

export default class Bigsearch extends Component 
{

    handleChangeText(e)
    {
        console.log(e)
    }

    render()
    {
        return(
            <nav className='main bigsearch'> 
                <div className='grid'> 
                    <div className='col-3 logo'> <a href='home.html' title='Logo Birokrasi Mudah'><img src='/images/whitelogo.png' /></a></div>
                </div>
                <div className='container'> 
                    <div className='m-lg' />
                    <div className='grid-center'>
                    <div className='col-8_md-12_sm-12'>
                        <h2 style={{fontWeight: 300}}>
                            Saya berada dari Kabupaten/Kota 
                            {' '}
                            <select className='home-select-white'>
                                <option>Bekasi</option>
                            </select>
                            <br />dan ingin <strong>mengurus...</strong>
                        </h2>
                        <form className='form-container'>
                            <div className='form-control' style={{position: 'relative'}}>
                                <i className='fa fa-search icon-home-search'> </i>
                                <input className='input-lg input-outline-white input-home-search' id='big-search-input' type='text' placeholder='Apa yang ingin anda urus ?' />
                                <small>contoh: membuat surat nikah, perpanjang STNK, dll</small>
                                <Recomendation />
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className='m-lg' />
                </div>
                </nav>

        )
    }
}