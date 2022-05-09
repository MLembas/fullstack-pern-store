
const defaultState = {
   customers: []
 }

export const cusReducer = (state = defaultState, action) => {
   switch (action.type) {
     case "ADD_CUS":
       
       return {...state, cash: state.cash + action.payload}
   
     case "GET_CUS":
       
       return {...state, cash: state.cash - action.payload}
     
     default:
       return state
   }
 }