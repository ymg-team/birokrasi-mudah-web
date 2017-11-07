import React, {Component} from 'react'
import Bigsearch from '../components/molecules/BigSearch'
import DeckResult from '../components/molecules/DeckResult'

export default class Home extends Component 
{
    render()
    {
        return (
            <div>
                <Bigsearch />
                <div className='container'>
                    <div className='grid-center'> 
                        <div className='col-8_col-md-12_col-sm-12 home-help'>
                            <a href='javascript:;' onClick={() => modal.show('Cara Menggunakan', 'modal-howtouse')}>Cara Menggunakan</a>
                            <a href='javascript:;' onClick={() => modal.show('Sumber Data', 'modal-datasource')}>Sumber Data</a>
                            <a href='javascript:;' onClick={() => modal.show('Kontak kami', 'modal-contact')}>Kontak Kami</a>
                        </div>
                    </div>
                </div>
                {/* modal content how to use */}
                <div className='hide' id='modal-howtouse'>
                    <article>
                        <h3>Halaman Pencarian</h3>
                        <p>
                            Gunakan pencarian yang ada di halaman depan untuk sesuai dengan urusan yang akan anda lakukan di pemerintahan. Tiap anda melakukan pengetikan akan ada
                            beberapa rekomendasi yang ditampilkan, klik rekomendasi tersebut untuk info lebih lengkap.
                        </p>
                    </article>
                </div>
                {/* modal for data source */}
                <div className='hide' id='modal-datasource'>
                    <article>
                        this is data source
                    </article>
                </div>
                {/* modal data contact */}
                <div className='hide' id='modal-contact'>
                    <article>
                        this is kontak
                    </article>
                </div>

                <div class="m-lg" />

                {/* start of deck result */}
                <DeckResult 
                    title='Pencarian Populer'
                    subtitle='Berikut adalah beberapa keperluan yang sering dicari oleh pengunjung.'
                    showmore={true}
                />
                {/* end of deck result */}

            </div>
        )
    }
}