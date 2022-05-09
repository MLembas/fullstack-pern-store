import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeviceList from '../components/DeviceList'

const Shop = () => {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)//спочатку назва редюсера потым назва змынноъ
  
  const auth = useSelector(state => state.auth.auth)
  console.log('using reducer ' + auth)

  const AddCash = () => {
    dispatch({type: "ADD_CASH", payload: 3})
  }
  const GetCash = () => {
    dispatch({type: "ADD_CASH", payload: 3}) 
  }

  const Login = () => {
    dispatch({type:"LOGED", payload: true})
  }
  const Logout = () => {
    dispatch({type: "NOTLOGED", payload: false})
  }

  return (
    <div>
      <div style={{fontSize: '30px'}}>{cash}</div>
      <div style={{fontSize: '30px'}}>{auth}</div>
       <h3>Main</h3>
       <button onClick={AddCash}>Add</button>
       <button onClick={GetCash}>Get</button>
       <button onClick={Login}>Login</button>
       <button onClick={Logout}>Logout</button>
       <div>
         <DeviceList />
       </div>
    </div>
  )
}

export default Shop