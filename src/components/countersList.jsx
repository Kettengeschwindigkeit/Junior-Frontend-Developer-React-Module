import { useState } from 'react'
import Counter from './counter'


const CountersList = () => {

    const [counters, setCounters] = useState([
        {id: 0, value: 0, name: 'Useless thing'}, 
        {id: 1, value: 4, name: 'Spoon'}, 
        {id: 2, value: 0, name: 'Fork'},
        {id: 3, value: 0, name: 'Plate'},
        {id: 4, value: 0, name: 'Minimalist kit'}
    ]) 

    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id)
        setCounters(newCounters)
    }

    return (
        <>
            {counters.map((count) => (
                <Counter key={count.id} onDelete={handleDelete} {...count} />
            ))}
        </>
    )
}

export default CountersList
