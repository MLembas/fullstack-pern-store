import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import TypeBar from './components/TypeBar';
import BrandBar from './components/BrandBar';
import DeviceList from './components/DeviceList';
import ReduxNavBar from './components/ReduxNavBar';
import {useState, useEffect, useContext} from 'react'
import { check } from './http/userAPI';
import { useDispatch, useSelector, } from 'react-redux'
import { Context } from '.';
import {fetchTypes} from './http/deviceAPI'
import {fetchTypes1} from './http/deviceAPI'
import {$host} from './http/index'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const auth = useSelector(state => state.auth.auth)//check is logeg === true
  const types = useSelector(state => state.types.types)

  const {device} = useContext(Context)

//   const fetchTypes = async (email, password) => {
//     const {data} = await $host.get('api/type')
//     dispatch({type: "FETCH_TYPES", payload: data})
//     // return data
//  }

  // useEffect(() => {
  //   fetchTypes().then(dispatch({type: "FETCH_TYPES", payload: data}))
  //   // dispatch({type: "FETCH_TYPES", payload: data})
  //   console.log('done')
  // }, [])
  
  // useEffect(() => {
  //   console.log('fuck you ')
  //   dispatch(fetchTypes1())
  // }, [])

  useEffect(() => {
    fetch('http://localhost:5000/api/type').
    then(response => response.json())
//   .then(json => dispatch(addManyTypes(json)))
  .then(json => console.log(json))
  }, [])
  useEffect(() => {
    fetch('http://localhost:5000/api/brand').
    then(response => response.json())
//   .then(json => dispatch(addManyTypes(json)))
  .then(json => console.log(json))
  }, [])
  useEffect(() => {
    fetch('http://localhost:5000/api/device').
    then(response => response.json())
//   .then(json => dispatch(addManyTypes(json)))
  .then(json => console.log(json))
  }, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').
    then(response => response.json())
//   .then(json => dispatch(addManyTypes(json)))
  .then(json => console.log(json))
  }, [])

  // useEffect(() => {
    
  //   fetchTypes()
  //   dispatch({type: "FETCH_TYPES", payload: data})
  //   console.log('done')
  // }, [])

  useEffect(() => {
    // setTimeout( () => {
    //   check().then(data => {
    //     //dispatch({type: "LOGIN", payload: data})//orig
    //     dispatch({type: "TRUE", payload: true})//changed acording to tutor
    //     dispatch({type: "LOGED", payload: true})//check is logeg === true
    //   }).finally(() => setLoading(false))
    // }, 2000)
    check().then(data => {
      //dispatch({type: "LOGIN", payload: data})//orig MAYBE THERE SHOULD BE THE SAME
      dispatch({type: "TRUE", payload: true})//changed acording to tutor
      dispatch({type: "LOGED", payload: true})//check is logeg === true
    }).finally(() => setLoading(false))
  }, [])

  if(loading) {
    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading, please wait...</div>
  }
  return (
    <BrowserRouter className="App">
      <ReduxNavBar />
      {/* <NavBar /> */}
      <div style={{display: 'flex', padding: '16px'}}>
        <TypeBar />
      <div>
        <BrandBar />
        <AppRouter />
        
        {/* <DeviceList /> */}
        
        
        </div>
        
      </div>
      {/* <ReduxNavBar /> */}
    </BrowserRouter>
  );
}

export default App;
