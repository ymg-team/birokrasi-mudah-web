import React, {Component} from 'react'
import Subtitle from '../atoms/Subtitle'
import Card from '../atoms/CardDeckResult'

export default class DeckResult extends Component 
{
    generateCards()
    {
        
    }

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
                            {
                                this.props.data.map((n, key) => (
                                    <Card key={key} {...n} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}