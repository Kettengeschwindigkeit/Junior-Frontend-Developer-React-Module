import React from "react"

const Counter = () => {
    const count = 0 

    const formatCount = () => {
        return count === 0 ? "empty" : count
    }
    return (
        <div>
            <span>{formatCount()}</span>
            <button>+</button>
        </div>
    )
}

export default Counter
