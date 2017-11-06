import React, {PureComponent} from 'react'
import ReactHelmet from 'react-helmet'
import {toCamelCase} from 'string-manager'

export default class Helmet extends PureComponent 
{
    render()
    {
        const {title, description, type, image} = this.props
        return <ReactHelmet
            title={toCamelCase(title)}
            meta={[
                {'name': 'description', 'content': description},
                {'property': 'og:type', 'content': type || 'article'},
                {'property': 'og:title', 'content': toCamelCase(title)},
                {'property': 'og:url', 'content': url},
                {'property': 'og:image', 'content': image},
                {'property': 'og:description', 'content': description},
                {'property': 'twitter:card', 'content': type || 'summarry'},
                {'property': 'twitter:site', 'content': '@byidmore'},
                {'property': 'twitter:title', 'content': title},
                {'property': 'twitter:description', 'content': description},
                {'property': 'twitter:image', 'content': image}
            ]}
            script={script}
            link={link}                
        />
    }
}