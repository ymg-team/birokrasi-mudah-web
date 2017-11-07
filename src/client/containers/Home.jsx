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
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum neque maximus lorem tempor sodales. Vestibulum a convallis nisi. Sed fringilla ante elit, quis rhoncus nibh congue non. Donec mollis lorem interdum dolor feugiat lacinia. Nullam eleifend tempor scelerisque. Ut aliquet erat vitae libero sodales, in egestas eros molestie. Praesent tristique nisi nec leo placerat tincidunt. Sed posuere augue in efficitur dapibus. Proin et purus sit amet nulla tincidunt lobortis eget in quam. Praesent tempor tempor pretium. Sed ornare sit amet augue sit amet convallis. Nulla tincidunt mi nulla, in scelerisque sem hendrerit non. Donec eget velit pretium dolor hendrerit malesuada tincidunt a metus. Morbi varius tellus lectus, in feugiat magna rutrum vel. Aliquam ultrices leo vitae ante maximus venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        <p>
                        Donec felis dui, dignissim quis ornare ac, ultricies nec dolor. In sollicitudin risus nec ligula sagittis aliquam. Integer tempus molestie elit, aliquam posuere ipsum. Ut nec tristique enim, in consequat tellus. Quisque convallis volutpat elit sed ultrices. Donec ut facilisis dolor. Nulla fringilla est sem, non varius odio cursus et.   </p>
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