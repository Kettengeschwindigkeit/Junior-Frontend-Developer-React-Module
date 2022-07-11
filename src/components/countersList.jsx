import Counter from './counter'


const CountersList = () => {
    const counters = [
        {id: 0, value: 0, name: 'Useless thing'}, 
        {id: 1, value: 4, name: 'Spoon'}, 
        {id: 2, value: 0, name: 'Fork'},
        {id: 3, value: 0, name: 'Plate'},
        {id: 4, value: 0, name: 'Minimalist kit'}
    ]
    return (
        <>
            {counters.map((count) => (
                <Counter key={count.id} value={count.value} name={count.name} />
            ))}
        </>
    )
}

export default CountersList
