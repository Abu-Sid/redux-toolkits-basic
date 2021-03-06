import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import counterReducer from './counterSlice';

// const counterReducer= (state =initialState, action)=>{
//     if(action.type==='increment'){
//         return {
//             counter: state.counter + 1 ,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type==='increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type==='decrement'){
//         return {
//             counter: state.counter - 1 ,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type==='reset'){
//         return {
//             counter: 0 ,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type==='toggle'){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// }


const store = configureStore({
    reducer:{ counter: counterReducer,
              auth: authReducer }
})

export default store;