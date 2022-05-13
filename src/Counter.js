import React, {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)


    return(
        <div>
            <p>
            {counter}
            </p>

            <button>+</button>
            <button>-</button>
        </div>
    )
}

export default Counter;