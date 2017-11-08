import React, {Component} from 'react'
import SubtitleResult from '../atoms/SubtitleResult'
import CardMap from '../atoms/BigResult/CardMap'
import CardStep from '../atoms/BigResult/CardStep'

export default class BigResult extends Component 
{
    render()
    {
        return(
            <div className='big-result'> 
                <div className='container'>
                    {/* map */}
                    <SubtitleResult 
                        title='Alamat dan Jandwal'
                        subtitle='Berikut alamat dan jadwal untuk bisa melakukan "Perpanjang Surat Tanda Kendaraan Bermotor(STNK) di Kota Bekasi"'
                    />
                    <CardMap />
                    {/* end of map */}
                    {/* persyaratan */}
                    <SubtitleResult 
                        title='Persyaratan'
                        subtitle='Pastikan anda menyiapkan segala persiapan yang ada di bawah ini.'
                    />
                    {
                        [1,2].map((n,key) => (
                            <CardStep 
                                key={key}
                                checkbox={false}
                                is_last={key == 1} 
                                />
                        ))
                    }
                    {/* end of persyaratan */}
                    
                    {/* steps */}
                    <SubtitleResult 
                        title='Mekanisme'
                        subtitle='Silahkan mengikuti langkah-langkah dibawah ini untuk "Perpanjangan Surat Tanda Nomor Kendaraan (STNK)".'
                    />
                    {
                        [1,2,3,4,5,6,7,8].map((n,key) => (
                            <CardStep 
                                key={key}
                                checkbox={false}
                                is_last={key == 7} 
                                />
                        ))
                    }
                    {/* end of steps */}
                    
                    {/* contact */}
                    <SubtitleResult 
                        title='Mekanisme'
                        subtitle='Silahkan mengikuti langkah-langkah dibawah ini untuk "Perpanjangan Surat Tanda Nomor Kendaraan (STNK)".'
                    />
                    {
                        [1,2,3].map((n,key) => (
                            <CardStep 
                                key={key}
                                icon='fa fa-phone'
                                is_last={key == 2} 
                                />
                        ))
                    }
                    {/* end of contact */}
                </div>
            </div>
        )
    }
}