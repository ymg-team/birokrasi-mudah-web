import React, {PureComponent} from 'react'

export default class Recomendation extends PureComponent
{
    render()
    {
        console.log(this.props.loading)
        return(
            <div className='deck-result' id='bigsearch-recomendation'>
                <div className='deck-result-content bg-white' style={{padding: 0}}>
                    <div className='grid' id='bigsearch-recomendation-result' />
                </div>
            </div>
        )
    }
}

const Loading = () => (
    <div className='col-12 card-result card-result-small'>
        <div className='card-result-inside'>
            mengamil data...
        </div>
    </div>
)