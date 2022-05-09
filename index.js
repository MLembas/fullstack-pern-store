import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { store } from './store';
import { AuthContext } from './contexts';
import AuthProvider from './poviders/AuthProvider';
import UserStore from './contexts/index'
import DeviceStore from './contexts/indexDevice'


export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
    // authed: new UserStore()
  }}>
    {/* <AuthProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  {/* </AuthProvider> */}
  </Context.Provider>,
  

  document.getElementById('root') 
);

