import React, { useReducer } from 'react'
import valueReducer from "./ValueReducer"

export const Child2 = () => {
    const [state, dispatch] = useReducer(valueReducer, 5)
    return (
        <div>
            <h1>This is the value {state}
            </h1>
            <button onClick={()=>dispatch("Increment")} >Increment</button>
          <br/>  <button onClick={()=>dispatch("Decrement")} >Dncrement</button>
        
        </div>
    )
}
