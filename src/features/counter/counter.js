import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,reset,incrementByAmount } from './counterSlice';
const Counter = () => {
    const count = useSelector((state)=>state.Counter.count);
    const dispatch = useDispatch();
    const [incrementAmount,setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll =()=>{
        setIncrementAmount(0);
        dispatch(reset());
    }
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=>increment()}>+</button>
            <button onClick={()=>decrement()}>-</button>
        </div>
        <input 
        type="text"
        value={incrementAmount}
        onChange={(e)=>setIncrementAmount(e.target.value)}
        />
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>add value</button>
        <button onClick={resetAll}>reset</button>
    </section>
  )
}

export default Counter;