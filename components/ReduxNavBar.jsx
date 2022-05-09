import  {React,  useState} from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

const ReduxNavBar = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   

   const auth = useSelector(state => state.auth.auth)
  console.log('using reducer ' + auth)

  const user = useSelector(state => state.user.user)
  console.log(user)

   const [atd, setAtd] = useState(false)
   const [count, setCount] = useState(0);

  const Login = () => {
   dispatch({type:"LOGED", payload: true})
 }
 const Logout = () => {
  dispatch({type: "LOGOUT", payload: {}}) 
  dispatch({type: "NOTLOGED", payload: false})
  navigate('/login');
 }


  return (
    <div>
       <div className='wr' style={{background: 'grey'}}>
      <div className='wrapper' style={{padding: '0px', margin: '0px', border: '0px'}}>
        <div className='container' style={{ padding: '40px', marginLeft: '0px', marginRight: '500px', background: 'grey'}}>
          <div className='nav-list' style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <NavLink to={'/'}>
                  Home
                </NavLink>
            </div>
            {auth ? 
              <div style={{marginLeft: '100px'}}>
              <NavLink to={'/admin'} style={{marginRight: '20px'}}>Admin panel</NavLink>
              {/* <NavLink to={'/login'} onClick={() => {setCount(count - 1)}}>Log out</NavLink> //the way it was before token
              <NavLink to={'/login'} onClick={() => {setCount(count - 1)}}>Log out</NavLink> */}
              <button onClick={ () => { Logout(); setCount(count - 1)}}>Logout</button>
              </div>
              :
              <div style={{marginLeft: '100px'}}>
              <NavLink to={'/login'} style={{marginRight: '20px'}} 
              onClick={() => {setCount(count + 1)}}
              >Authorization</NavLink>
              {/* <button onClick={() => {setCount(count + 1); user.setAuthed(true)}}>login</button> */}
              </div>
            }
          </div>
        </div>

        <div>
          <button onClick={Login}>Login</button>
          <button onClick={Logout}>Logout</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ReduxNavBar