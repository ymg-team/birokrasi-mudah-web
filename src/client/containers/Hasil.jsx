import React, {Component} from 'react'
import Navbar from '../components/atoms/Navbar'
import Helmet from '../components/atoms/Helmet'
import BigResult from '../components/molecules/BigResult'
import apiCaller from '../../utils/apiCaller'
import {find} from 'lodash'

// store
import ResultStore, {pushData} from '../store/result'

export default class Hasil extends Component 
{
    constructor()
    {
        super()
        this.state = {
            result: null
        }
    }

    componentDidMount()
    {
        let {title} = this.props.match.params 
        let titlearr = title.split('-')
        const id = titlearr[titlearr.length - 1]
        // check data available on store
        const result = find(ResultStore, n => {
            return n.id == id
        })

        if(result)
        {
            // set result data from store
            this.setState({result})
        }else 
        {   
            // fetch data
            this.fetchData(id)
        }

    }

    fetchData(id)
    {
        apiCaller('get', `/api/hasil/${id}`,).then(result => {
            if(result.status == 200) pushData(result)
            this.setState({result})
        })
    }

    render()
    {
        let {title} = this.props.match.params 
        let titlearr = title.split('-')
        const id = titlearr[titlearr.length - 1]
        delete titlearr[titlearr.length - 1]
        title = titlearr.join(' ')

        return (
            <div>
                <Helmet 
                    title={title}
                />
                <Navbar />
                {/* subheader */}
                <div className='container'> 
                    <div className='grid'> 
                        <div className='col-12'>
                        <div className='subtitle align-center'> 
                            <h3 className='title'>{title}</h3>
                            {
                                !this.state.result ? 'Sedang memproses data...' : <p>Update 34 Februaru 2017, oleh Samsat Kota Bekasi</p>
                            }
                        </div>
                        {!this.state.result ?
                            null : 
                            <div className='align-center' style={{padding:'1em 0', display:'block'}}>
                                <a className='btn btn-outline-white' href='javascript' style={{marginRight: '.5em'}} title='Simpan untuk dibuka dikemudian hari'> <i className='fa fa-save'> </i>&nbsp;Simpan</a>
                                <a className='btn btn-outline-white' href='javascript' title='Download dalam bentuk PDF'><i className='fa fa-download'> </i>&nbsp;Download</a>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                {/* endof subheader */}
                {/* big result */}
                {!this.state.result ? null : <BigResult />}
                {/* end if big result */}
            </div>
        )   
    }
}