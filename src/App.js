import './App.css'

import {useSelector,useDispatch} from 'react-redux'

const App =()=>{

  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  return(
    <div
    className="App"
    >
      <h2>Welcome to React Redux Hooks Way</h2>
       <h3>Counter : {counter}</h3>
       <div style={{display:'flex',justifyContent:'space-around'}}>
      <button onClick={(()=>dispatch({type:'INC'}))}>INCREMENT</button>
      <button onClick={(()=>dispatch({type:'DEC'}))}>DECREMENT</button>
      </div>
    </div>
  )
}


export default App