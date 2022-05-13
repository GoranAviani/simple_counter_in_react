import React, {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)


    const addCounterButtonHandler = () => {
        setCounter(counter + 1)
    }

    const removeCounterButtonHandler = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <p>
                {counter}
            </p>

            <button onClick={addCounterButtonHandler}>+</button>
            <button onClick={removeCounterButtonHandler}>-</button>
        </div>
    )
}

export default Counter;