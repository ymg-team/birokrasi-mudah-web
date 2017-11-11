import React, {Component} from 'react'

export default class CardMap extends Component 
{
    render()
    {
        const {location} = this.props
        console.log(location[0])
        return(
            <div className='grid-center'> 
                <Card show_more={location.length > 1} {...location[0]} />
                {/* maps modal */}
                {
                    location.length > 1 ? 
                        <div id='modal-maps' className='hide'>
                            <div className='grid-center'>
                                {location.map((n, key) => (
                                    <Card key={key} {...n} />
                                ))}
                            </div>
                        </div>
                    : null
                }
            </div>
        )
    }
}

const Card = (props) => (
    <div className='col-8_md-12_sm-12'>
        <div className='big-result-card big-result-card--map'>
            <div className='big-result-card-map-embed'>
                <iframe className='map' src={`//www.google.com/maps/embed/v1/place?q=${props.coordinat.lat},${props.coordinat.lng}&zoom=17&key=AIzaSyALC1j4_h9NQGFcK3wtYHVDxn8fFhwB210`} />
            </div>
            <div className='big-result-card-map-text'> 
                <p>
                    <strong>{props.name}</strong>
                    <br />
                    {props.desc}
                </p>
                <hr />
                <p><strong>Jadwal <span className='text-red'>(hari ini tutup)</span></strong></p>
                <p>
                Senin - Jum'at :&nbsp; <strong>07:00 - 14:00 WIB </strong><br />Sabtu :&nbsp;<strong>07:00 - 15:00 WIB </strong></p>
                {
                    props.show_more? 
                        <a 
                            className='btn btn-outline-white' 
                            href='javascript:;' 
                            onClick={() => {modal.show('Lokasi Tersedia', 'modal-maps')}} 
                            style={{display: 'block', textDecoration: 'none', textAlign: 'center'}}>
                            Tampilan lokasi lainnya
                        </a>
                    : null
                }
            </div>
        </div>
    </div>
)