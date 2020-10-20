import React, { useContext } from 'react'
import ValueContext from './ValueContext'

export const Child = () => {

    let value = useContext(ValueContext);

    return (
        <div>
            <h1>This is the value from context {value[0]}</h1>
            <button onClick={() => { value[1](++value[0]) }}>Increment</button>
            <br />  
           <button onClick={() => { value[1](--value[0]) }}>Decrement</button>
        </div>
    )
}
