const defaultState = {
   auth: false,
}

export const authReducer = (state = defaultState, action) => {
   switch(action.type){
      case "LOGED":
         return {auth: state.auth = action.payload }
         // return {...state, auth: state.auth = true}
      case "NOTLOGED":
         return {auth: state.auth = action.payload}
         //return {auth: state.auth = false}//returns underfined
         //return {...state, auth: state.auth = true}//wrong
         
      default:
         return state
   }
}