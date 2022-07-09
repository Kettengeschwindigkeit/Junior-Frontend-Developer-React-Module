import React from "react"

const Counter = () => {
    const count = 0 

    const formatCount = () => {
        return count === 0 ? "empty" : count
    }

    const imageUrl = "https://sun9-27.userapi.com/c408/u116869231/a_36b66556.jpg?ava=1"

    return (
        <React.Fragment>
            <img src={imageUrl} alt="image" />
            <span className="badge bg-primary m-2">{formatCount()}</span>
            <button className="btn btn-primary btn-sm m-2">+</button>
        </React.Fragment>
    )
}

export default Counter
