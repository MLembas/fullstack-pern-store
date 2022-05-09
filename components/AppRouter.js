import React, { Component, useContext } from 'react'
import {Routes, Route, Redirect} from "react-router-dom"
import { Context } from '..'
import { AuthContext } from '../contexts'
import Shop from '../pages/Shop'
import { authRoutes, publicRoutes } from '../routes'
import useAuth from './../hooks/useAuth'
import { useDispatch, useSelector, } from 'react-redux'

// const auth = false
//створити обєкт логін в який записати 
//значення з 3 полів і якщо обєкт != нул то 
//вважати що користувач залогінений



  const AppRouter = () => {
  //  const isAuth = false 
  //  const {user} = useContext(Context)
  //  console.log(user)

  // const auth = useAuth();
  // console.log(auth)



  // const isAuth = useAuth();
  // console.log(isAuth)

  // console.log(auth)



  const {user} = useContext(Context)
  console.log(user)
  console.log(user.authed)
  // const {authed} = useContext(Context)
  // console.log(authed)



  const auth = useSelector(state => state.auth.auth)
  console.log('using reducer ' + auth)
   
  return (
    // <Routes>
    //    {isAuth && authRoutes.map(({path, element}) => 
    //    <Route key={path} path={path} element={element} exact/>
    //    )}
    //    {publicRoutes.map(({path, element}) => 
    //    <Route key={path} path={path} element={element} exact/>
    //    )}
    //    <Route path={'/*'} element={<Shop/>} />
    // </Routes>



    // <Routes>
    //    {user.authed === true && authRoutes.map(({path, element}) => 
    //    <Route key={path} path={path} element={element} exact/>
    //    )}
    //    {publicRoutes.map(({path, element}) => 
    //    <Route key={path} path={path} element={element} exact/>
    //    )}
    //    {/* <Route path={'/*'} element={<Shop/>} /> */}
    // </Routes>


    <Routes>
       {auth === true && authRoutes.map(({path, element}) => 
       <Route key={path} path={path} element={element} exact/>
       )}
       {publicRoutes.map(({path, element}) => 
       <Route key={path} path={path} element={element} exact/>
       )}
       {/* <Route path={'/*'} element={<Shop/>} /> */}
    </Routes>
  )
}

export default AppRouter