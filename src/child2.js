import React, { useReducer } from 'react';
import counterReducer from './counterReducer'

const Child2 = () => {
    let [state, dispatch] = useReducer(counterReducer,10)
    console.log(state)
    return(
        <div>
        <h1>This is the second Child using COunter Redeucer</h1>
        <h3>Value of reducer state is: {state}</h3>
        <button onClick={()=>dispatch('INCREMENT')}>Incerment Reducer</button>
        </div>
    )
}
export default Child2
