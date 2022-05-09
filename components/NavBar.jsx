import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '..'
import UserStore from '../contexts'

const NavBar = () => {
   const {user} = useContext(Context)
   console.log("wwwww", user)
   const [atd, setAtd] = useState(false)
   const [count, setCount] = useState(0);

  
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
            {user.authed ? 
              <div style={{marginLeft: '100px'}}>
              <NavLink to={'/admin'} style={{marginRight: '20px'}}>Admin panel</NavLink>
              <NavLink to={'/login'} onClick={() => {setCount(count - 1); user.setAuthed(false)}}>Log out</NavLink>
              </div>
              :
              <div style={{marginLeft: '100px'}}>
              <NavLink to={'/login'} style={{marginRight: '20px'}} 
              onClick={() => {setCount(count + 1); user.setAuthed(true)}}
              >Authorization</NavLink>
              {/* <button onClick={() => {setCount(count + 1); user.setAuthed(true)}}>login</button> */}
              </div>
            }
            
            
          </div>
        </div>
      </div>
      </div>
      {/* <div className='wrapper' style={{padding: '0px', margin: '0px', border: '0px'}}>
        <div className='container' style={{ padding: '40px', marginLeft: '0px', marginRight: '500px', background: 'grey'}}>
          <div className='nav-list' style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
            <NavLink to={'/'}>
                  Home
                </NavLink>
            </div>
            <div style={{marginLeft: '100px'}}>
              <NavLink to={'/'} style={{marginRight: '20px'}}>Authorization</NavLink>
              <NavLink to={'/'}>Admin Panel</NavLink>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default NavBar