import React, { useContext, useState } from 'react'
import { Context } from '..'
import { useDispatch, useSelector, } from 'react-redux'

const TypeBar = () => {

  const dispatch = useDispatch()
  const types = useSelector(state => state.types.types)
  console.log(types)
   const {device} = useContext(Context)

const [selectedType, setSelectedType] = useState('')
console.log(selectedType)

  return (
    <div className='wrapper'>
       <div className='container'>
         {/* <div className='list' style={{cursor: 'pointer'}}>
            {device.types.map(type => 
               <div key={type.id} onClick={() => setSelectedType(type.name)}>{type.name}</div>
               )}
         </div> */}
         <div className='list' style={{cursor: 'pointer'}}>
            {types.map(type => 
               <div key={type.id} onClick={() => setSelectedType(type.name)}>{type.name}</div>
               )}
         </div>
       </div>
    </div>
  )
}

export default TypeBar