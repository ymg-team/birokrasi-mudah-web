import {find} from 'lodash'

// store for result
const store = []

// push data to the store
export function pushData(data){
    const available = find(store, n => {
        return n.id == data.id
    })

    if(!available)
        store.push(data)
}

export default store