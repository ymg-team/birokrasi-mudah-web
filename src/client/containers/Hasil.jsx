import React, {Component} from 'react'
import Navbar from '../components/atoms/Navbar'
import Helmet from '../components/atoms/Helmet'
import BigResult from '../components/molecules/BigResult'

export default class Hasil extends Component 
{
    render()
    {
        let {title} = this.props.match.params 
        title = title.split('-')
        const id = title[title.length - 1]
        console.log(id)
        // console.log(title)
        return (
            <div>
                <Helmet 
                    title={'this is title'}
                />
                <Navbar />
                {/* subheader */}
                <div className='container'> 
                    <div className='grid'> 
                        <div className='col-12'>
                        <div className='subtitle align-center'> 
                            <h3 className='title'>Cara Perpanjang Surat Tanda Kendaraan Bermotor(STNK) di Kota Bekasi</h3>
                            <p>Update 34 Februaru 2017, oleh Samsat Kota Bekasi</p>
                        </div>
                        <br />
                        <div className='align-center'> <a className='btn btn-outline-white' href='javascript' style={{marginRight: '.5em'}} title='Simpan untuk dibuka dikemudian hari'> <i className='fa fa-save'> </i>&nbsp;Simpan</a><a className='btn btn-outline-white' href='javascript' title='Download dalam bentuk PDF'><i className='fa fa-download'> </i>&nbsp;Download</a></div><br />
                        </div>
                    </div>
                </div>
                {/* endof subheader */}
                {/* big result */}
                <BigResult />
                {/* end if big result */}
            </div>
        )   
    }
}