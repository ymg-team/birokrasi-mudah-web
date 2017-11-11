import React, {Component} from 'react'

export default class CardMap extends Component 
{
    render()
    {
        const {location} = this.props
        console.log(location)
        const firstLoc = location[0]
        return(
            <div className='grid-center'> 
                <div className='col-8_md-12_sm-12'>
                    <div className='big-result-card big-result-card--map'>
                    <div className='big-result-card-map-embed'>
                        <iframe className='map' src='//www.google.com/maps/embed/v1/place?q=samsat,bekasi&zoom=17&key=AIzaSyALC1j4_h9NQGFcK3wtYHVDxn8fFhwB210' />
                    </div>
                    <div className='big-result-card-map-text'> 
                        <p> <strong>Kantor Samsat Bekasi</strong><br />Jl. Maju Negara 20, Bekasi Selatan </p>
                        <hr />
                        <p><strong>Jadwal <span className='text-red'>(hari ini tutup)</span></strong></p>
                        <p>
                        Senin - Jum'at :&nbsp; <strong>07:00 - 14:00 WIB </strong><br />Sabtu :&nbsp;<strong>07:00 - 15:00 WIB </strong></p>
                        {
                            location.length > 1 ? 
                                <a className='btn btn-outline-white' href='javascript:;' style={{display: 'block', textDecoration: 'none', textAlign: 'center'}}>Tampilan lokasi lainnya</a>
                            : null
                        }
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}