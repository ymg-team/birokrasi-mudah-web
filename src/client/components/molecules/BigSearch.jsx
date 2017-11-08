import React, {Component} from 'react'
import Recomendation from '../atoms/BigSearchRecomendation'
import {Link} from 'react-router-dom'
import apiCaller from '../../../utils/apiCaller'

let timer = null 

export default class Bigsearch extends Component 
{

    constructor()
    {
        super()
        this.state = {
            recommendations: [],
            loading: false
        }
    }

    handleChangeText(e)
    {
        console.log('reset timer...')
        recomendation.loading()
        clearTimeout(timer)
        const {value} = e.target
        this.setState({
            loading: value != ''
        }, () => {
            if(value != '')
                timer = setTimeout(() => this.getRecommendation(value), 2000)
            else 
                recomendation.close()
        })
    }

    getRecommendation(val)
    {
        console.log('show recommentaion...')
        this.setState({
            loading: false
        }, () => {
            apiCaller('get', `/api/recommendation?q=${val}`,).then(res => {
                console.log(res)
                recomendation.show(res.result)
            })
        })
    }

    render()
    {
        return(
            <nav className='main bigsearch'> 
                <div className='grid'> 
                    <div className='col-3 logo'> 
                        <Link to='/' title='Logo Birokrasi Mudah'>
                            <img src='/images/whitelogo.png' />
                        </Link>
                    </div>
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
                                <input 
                                    onChange={(e) => this.handleChangeText(e)}
                                    className='input-lg input-outline-white input-home-search' 
                                    id='big-search-input' 
                                    type='text' 
                                    placeholder='Apa yang ingin anda urus ?' />
                                <small>contoh: membuat surat nikah, perpanjang STNK, dll</small>
                                <Recomendation 
                                    data={[]}
                                />
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