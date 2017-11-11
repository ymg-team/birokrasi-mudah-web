import React, {Component} from 'react'
import DeckResult from '../molecules/DeckResult'
import apiCaller from '../../../utils/apiCaller'

export default class PopularResult extends Component 
{
    constructor()
    {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount()
    {
        this.fetchData()
    }

    fetchData()
    {
        apiCaller('get', '/api/popular')
            .then(data => {
                this.setState({data})
            })
    }

    render()
    {
        return (
            <DeckResult 
                title='Pencarian Populer'
                subtitle='Berikut adalah pencarian yang paling sering digunakan pengunjung'
                data={this.state.data.result || []}
            />
        )
    }
}