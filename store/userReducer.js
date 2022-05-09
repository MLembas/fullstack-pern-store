const defaultState = {
   user: {}
}

export const userReducer = (state = defaultState, action) => {
   switch(action.type){
      case "LOGIN":
         return {user: state.user = action.payload}

         // return {auth: state.auth = action.payload }



         // return {...state, auth: state.auth = true}
      case "LOGOUT":
         return {user: state.user = action.payload}

         // return {auth: state.auth = action.payload}



         //return {auth: state.auth = false}//returns underfined
         //return {...state, auth: state.auth = true}//wrong
      case "TRUE":
         return {user: state.user = action.payload}
      default:
         return state
   }
}