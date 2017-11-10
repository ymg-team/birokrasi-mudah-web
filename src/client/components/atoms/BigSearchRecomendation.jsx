import React, {PureComponent} from 'react'
import {pushData} from '../../store/result'
import {Link} from 'react-router-dom'

export default class Recomendation extends PureComponent
{
    render()
    {
        
        return(
            <div className='deck-result' id='bigsearch-recomendation' style={{opacity:1,display:'inherit'}}>
                <div className='deck-result-content bg-white' style={{padding: 0}}>
                    <div className='grid' id='bigsearch-recomendation-result'>
                        {/* start itteration */}
                        {
                            this.props.data.map((n, key) => (
                                <RecommendationItem key={key} {...n} />
                            ))
                        }
                        {/* end of itteration */}
                    </div>
                </div>
            </div>
        )
    }
}

const RecommendationItem = (props) => (
    <div className='col-12 card-result card-result-small'>
        <div className='card-result-inside'>
        <div className='logo'>
            <img src={props.logo} title='logo lembaga' />
        </div>
        <div className='text'>
            <div className='text-title'>
                <Link 
                    onClick={() => {pushData(props)}}
                    to={'/hasil/'+ (props.title.replace(/ /g,'-')) + '-' + props.id}>{props.title}</Link>
            </div>
        </div>
        </div>
    </div>
)

export function RecommendationText(props){
    return (
        <div className='deck-result-content bg-white' style={{padding:0}}>
            <div className='grid' id='bigsearch-recomendation-result'>
                <div className='col-12 card-result card-result-small'>{props.text}</div>
            </div>
        </div>
    )
}