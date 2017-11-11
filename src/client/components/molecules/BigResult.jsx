import React, {Component} from 'react'
import SubtitleResult from '../atoms/SubtitleResult'
import CardMap from '../atoms/BigResult/CardMap'
import CardStep from '../atoms/BigResult/CardStep'
import CardContact from '../atoms/BigResult/CardContact'

export default class BigResult extends Component 
{
    render()
    {
        const {requirement, mechanism, contacts, location} = this.props
        return(
            <div className='big-result'> 
                <div className='container'>
                    {/* map */}
                    <SubtitleResult 
                        title='Alamat dan Jadwal'
                        subtitle='Berikut alamat dan jadwal untuk bisa melakukan "Perpanjang Surat Tanda Kendaraan Bermotor(STNK) di Kota Bekasi"'
                    />
                    {
                        location && location.length > 0 ?
                            <CardMap location={location} />
                        : <TextNoContent />
                    }
                    {/* end of map */}
                    {/* persyaratan */}
                    <SubtitleResult 
                        title='Persyaratan'
                        subtitle='Pastikan anda menyiapkan segala persiapan yang ada di bawah ini.'
                    />
                    {
                        requirement && requirement.length > 0 ?
                            requirement.map((n,key) => (
                                <CardStep 
                                    text={n}
                                    key={key}
                                    checkbox={false}
                                    is_last={key == requirement.length - 1} 
                                    />
                            ))
                        : <TextNoContent />
                    }
                    {/* end of persyaratan */}
                    
                    {/* steps */}
                    <SubtitleResult 
                        title='Mekanisme'
                        subtitle='Silahkan mengikuti langkah-langkah dibawah ini untuk "Perpanjangan Surat Tanda Nomor Kendaraan (STNK)".'
                    />
                    {
                        mechanism && mechanism.length > 0 ?
                            mechanism.map((n,key) => (
                                <CardStep 
                                    text={n}
                                    key={key}
                                    checkbox={false}
                                    is_last={key == mechanism.length - 1} 
                                    />
                            ))
                        : <TextNoContent />
                    }
                    {/* end of steps */}
                    
                    {/* contact */}
                    <SubtitleResult 
                        title='Kontak'
                        subtitle='Untuk keterangan lebih lanjut, silahkan hubungi kontak dibawah ini'
                    />
                    {
                        contacts && contacts.length > 0 ?
                            contacts.map((n,key) => (
                                <CardContact 
                                    key={key}
                                    icon={true}
                                    is_last={key == 2} 
                                    {...n}
                                    />
                            ))
                        : <TextNoContent />
                    }
                    {/* end of contact */}
                </div>
            </div>
        )
    }
}

const TextNoContent = (props) => (
    <p className='align-center' style={{marginBottom:'2em'}}>Konten belum di buat admin</p>
)