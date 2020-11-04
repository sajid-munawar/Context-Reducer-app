import React, { useReducer } from 'react'
import valueReducer from "./ValueReducer"

export const Child2 = () => {
    const [state, dispatch] = useReducer(valueReducer, 5)
    return (
        <div className="c2">
            <h1>This is the value from Reducer {state}
            </h1>
            <button onClick={()=>dispatch("Increment")} >Increment</button>
          <br/>  <button onClick={()=>dispatch("Decrement")} >Dncrement</button>
        
        </div>
    )
}
