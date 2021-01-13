import React, {useContext} from 'react';
import CounterContext from './counterContext';


const Child = () =>{
    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    return(
    <div>
        <h1>This is first Child</h1>
        <h2>Counter Value is : {counterValue[0]}</h2>
        <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment</button>
    </div>
    )
}
export default Child;