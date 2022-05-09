const defaultState = {
   types: [
      {id: 1, name: "NotSmartphones"},
      {id: 2, name: "NotTVs"},
   ]
}

export const typesReducer = (state = defaultState, action) => {
   switch(action.type){
      case "FETCH_TYPES":
         return {...state, types: [ ...action.payload] }

      case "LOGOUT":
         return {user: state.user = action.payload}
      case "TRUE":
         return {user: state.user = action.payload}
      default:
         return state
   }
}

export const addManyTypes = (payload) => ({type: "FETCH_TYPES", payload})