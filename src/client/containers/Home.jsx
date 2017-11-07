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
                        <h3>Hasil Pencarian</h3>
                        <p>
                            Dari hasil pencarian anda akan mendapatkan beberapa data antara lain :
                            <br/><br/>
                            <strong>Lokasi</strong>, dimana urusan tersebut bisa dilakukan, lokasi meliputi data sebagai berikut 
                            (koordinat, jadwal operasional, dan lokasi lainnya jika lebih dari satu lokasi).
                            <br/>
                            <strong>Persyaratan</strong>, meliputi berbagai persyaratan yang wajib anda lakukan sebelum datang kekantor lembaga untuk dilakukan ke langkah selanjutnya.
                            <br/>
                            <strong>Mekanisme</strong>, adalah beberapa langkah yang harus anda lakukan ketika sampai di lembaga yang bersangkutan.
                            <br/>
                            <strong>Kontak</strong>, berbagai macam kontak yang bisa anda hubungi berdasarkan pilihan kota dan lembaga yang tertera untuk mendapatkan keterangan lebih lengkap, kontak bisa meliputi nomor telepon, email dan bahkan sosial media.
                        </p>
                        <h3>Utilitas</h3>
                        <p>
                            Dari <strong>persyaratan dan mekanisme</strong> yang ada di halaman hasil pencarian terdapat checklist yang membantu anda untuk menandai bagian mana saja yang sudah dikerjakan atau belum, untuk kemudian tekan tombol save dan autosave untuk dibuka di haris berikutnya.
                            Anda bisa menyimpan hasil pencarian tersebut kedokumen PDF untuk digunakan kemudian sesuai kebutuhan. 
                        </p>
                    </article>
                </div>
                {/* modal for data source */}
                <div className='hide' id='modal-datasource'>
                    <article>
                        Data yang tambil di platform ini, didapatkan dari beberapa sumber :
                        <br/><br/>
                        <strong>Admin "BirokrasiMudah"</strong>, diinput oleh admin berdasarkan hasil pengamatan langsung di kantor lembaga, pengalaman sendiri, dan pengalaman dari pengguna platform.
                        <br/>
                        <strong>Perwakilan Lembaga</strong>, langsung diinput oleh perwakilan lembaga yang sudah mendapatkan akses ke platform. 
                        <br/><br/>
                        Pengguna bisa mengetahui penulis konten di hasil pencarian menggunakan menu log.
                    </article>
                </div>
                {/* modal data contact */}
                <div className='hide' id='modal-contact'>
                    <article>
                        Jika anda menemukan bug, kritik dan saran, atau kontak tim kami secara langsung silahkan mengirimkan email ke <a style={{color: '#F4F4F4'}} href="mailto:yussandeveloper@gmail.com">yussandeveloper@gmail.com</a>
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