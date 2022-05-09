import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'
import { addManyTypes } from "../store/typeReducer";

export const createType = async (type) => {
   const {data} = await $host.post('api/type', type)
   return data
}
// export const fetchTypes = async () => {
//    const {data} = await $host.get('api/type')
//    return data
// }
export const fetchTypes = async () => {
   return function(dispatch){
      const {data} =  $host.get('api/type').then(dispatch(addManyTypes(data)))
      // return data
   }
}

export const fetchTypes1 = () => {
   return function(dispatch){
      fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
//   .then(json => dispatch(addManyTypes(json)))
  .then(json => console.log(json))
   }
}
