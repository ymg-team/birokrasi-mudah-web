import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class CardResult extends PureComponent 
{
    static propTypes = {
        title: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        count: PropTypes.shape({
            search: PropTypes.number,
            user: PropTypes.number
        })
    }

    render()
    {
        return (
            <div className='col-6_sm-12 card-result'>
                <div className='card-result-inside'>
                    <div className='logo'>
                        <img src={this.props.image} title={this.props.title} />
                    </div>
                    <div className='text'>
                        <div className='text-title'><Link to={this.props.target}>{this.props.target}</Link></div>
                        <div className='text-stats'>di {this.props.location}<br />dicari {this.props.count.search}x - oleh {this.props.count.user} pengguna </div>
                    </div>
                </div>
            </div>
        )
    }
}