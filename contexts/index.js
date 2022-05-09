import { createContext } from "react";

// export const AuthContext = createContext({
//    isAuth: true,
//    user: {},
//    isLoaded: true,
//    // user: null,
//    token: null,
//    setUser: () => {},
//    setToken: () => {},
//    logOut: () => {},
//    // setUser: () => {},
//    // setIsAuth: () => {},
// })

export default class UserStore {

   user = {}
   authed = false

   setAuthed(bool) {
      this.authed = bool
      console.log(this.authed)
   }

   setUser(user) {
      this._user = user
  }

}


