import React from 'react'
import { createType } from '../../http/deviceAPI'
import './CTStyles.css'
import { useState } from 'react'


const CreateType = ({active, setActive}) => {
  const [value, setValue] = useState('')

  const addType = () => {
      createType({name: value}).then(data => {
          setValue('')
          // onHide()
      })
  }
  return (
    <div className={active ? "CT_wrapper active" : "CT_wrapper"} onClick={() => setActive(false)}>

       <div className={active ? 'CT_content active' : 'CT_content'}onClick={e => e.stopPropagation()}>
        <form>
          <div className='CT_title'>Add new type</div>
          <input className='CT_input' placeholder='enter new type'  value={value}
                        onChange={e => setValue(e.target.value)}/> 
        </form>
        <div className='CT_buttons'>
          <button onClick={addType} >Add type</button>
          <button onClick={() => setActive(false)}>Cancel</button>
       </div>
        </div>
    </div>
  )
}

export default CreateType