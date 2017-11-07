import React, {Component} from 'react'
import Subtitle from '../atoms/Subtitle'

export default class DeckResult extends Component 
{
    render()
    {
        return(
            <div className='deck-result'>
                <div className='container' />
                <Subtitle 
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                />
                <div className='deck-result-content'>
                    <div className='container'> 
                        <div className='grid'>
                            <div className='col-6_sm-12 card-result'>
                            <div className='card-result-inside'>
                                <div className='logo'> <img src='images/logos/polda-metro-jaya.png' title='polda metro jaya' /></div>
                                <div className='text'>
                                    <div className='text-title'><a href='result.html'>Cara perpanjang STNK</a></div>
                                    <div className='text-stats'>di Polda metro jaya<br />dicari 3400x - oleh 234 pengguna </div>
                                </div>
                            </div>
                            </div>
                            <div className='col-6_sm-12 card-result'>
                            <div className='card-result-inside'>
                                <div className='logo'> <img src='images/logos/kua.png' title='KUA' /></div>
                                <div className='text'>
                                <div className='text-title'><a href='result.html'>Membuat surat nikah</a></div>
                                <div className='text-stats'>di KUA daerah 1<br />dicari 3400x - oleh 234 pengguna </div>
                                </div>
                            </div>
                            </div>
                            <div className='col-6_sm-12 card-result'>
                            <div className='card-result-inside'>
                                <div className='logo'> <img src='images/logos/bp2t.png' title='KUA' /></div>
                                <div className='text'>
                                <div className='text-title'><a href='result.html'>Membuat surat izin usaha</a></div>
                                <div className='text-stats'>di KUA daerah 1<br />dicari 3400x - oleh 234 pengguna </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}