import React,{useContext} from 'react'
import ValueContext from './ValueContext'

export const Child = () => {
    
    let value=useContext(ValueContext) ;

    return (
        <div>
            <h1>This is the value from context {value}</h1>
        </div>
    )
}
