import React, { useContext, useState } from 'react'
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { useDispatch, useSelector, } from 'react-redux'
import Context from '../index'

const Auth = () => {

  let navigate = useNavigate();
const location = useLocation()
const isLogedLoc = location.pathname === '/login'
// console.log(location)
console.log('is path /login? ' + isLogedLoc)

// const {user} = useContext(Context)

//////////////////////////////////// integration part
const dispatch = useDispatch()
const user = useSelector(state => state.user.user)
  console.log(user)

  const auth = useSelector(state => state.auth.auth)


const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

// const click = async (e) => {
//   // e.preventDefault()
//   let data
//   if(isLogedLoc) {
//     e.preventDefault()
//     data = await login(email, password);
//     console.log(data)
//   } else {
//     e.preventDefault()
//     data = await registration(email, password)
//     console.log(data) 
//   }
// }
const click = async (e) => {
  e.preventDefault()
  try {
    let data
    if(isLogedLoc) {
      e.preventDefault()
      data = await login(email, password);
      console.log(data)
    } else {
      e.preventDefault()
      data = await registration(email, password)
      console.log(data) 
    }
    dispatch({type: "LOGIN", payload: data})
    console.log('THE DATA IN PAYLOAD: ', data )
    // console.log({data})
    // console.log(data )
    dispatch({type:"LOGED", payload: true})
    navigate('/')
  } catch (error) {
    alert(error.response.data.message)
  }
  // e.preventDefault()
  
}




///////////////////////////////////////////

  return (
    <div>
      <div className='container' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '400px', marginTop: '40px', width: '400px'}}>
        <form style={{display: 'flex', flexDirection: 'column', width: '96%'}}>
          <h2 style={{display: 'flex', justifyContent: 'center'}}>{isLogedLoc ? 'Login' : 'Registration'}</h2>

          <input type={'text'} placeholder={'Enter login'}  
          value={email} onChange={e => setEmail(e.target.value)}
          />
          <input type={'password'} placeholder={'Enter password'} style={{marginTop: '14px', marginBottom: '14px'}} 
          value={password} onChange={e => setPassword(e.target.value)}
          />
          
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {isLogedLoc ? 
             <NavLink to={'/registration'}> Don't have account? Register now</NavLink>
             :
             <NavLink to={'/login'}> Already have account? Login</NavLink>
            }

            <button style={{width: '108px', marginLeft: '1px'}}
            onClick={click} >{isLogedLoc ? 'Login' : 'Registration'}
            </button>
         
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Auth