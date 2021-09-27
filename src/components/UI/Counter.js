import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../redux/store/counterSlice';
import classes from './Counter.module.css';
;


const Counter = () => {
  

  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state=>state.counter.showCounter)
  const dispatch = useDispatch()
  
  const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter())
  };

//   const incrementHandler=()=>{
//       dispatch({ type:'increment'})
//   }
  const incrementHandler=()=>{
    dispatch(counterActions.increment())
}
  const increaseHandler= () => {
      dispatch(counterActions.increase(5)) // toolkits will convert it { type:'some_unique_identifier', payload:5}
  }
//   const increaseHandler= () => {
//       dispatch({ type:"increase", amount:5}) }
  
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
}
  const resetHandler = () => {
    dispatch(counterActions.reset())
 }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}> {counter}</div>}
      <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by 5 </button>
          <button onClick={decrementHandler}>Decrement</button>
          <button onClick={resetHandler}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
