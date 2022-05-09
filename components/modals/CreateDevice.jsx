import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../index'
import './CDStyles.css'

const CreateDevice = ({active2, setActive2}) => {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([])

//   const addInfo = () => {
//     setInfo([...info, {title: '', description: '', number: Date.now()}])
// }

  return (
    <div className={active2 ? "CD_wrapper active" : "CD_wrapper"} onClick={() => setActive2(false)}>

       <div className={active2 ? 'CD_content active' : 'CD_content'}onClick={e => e.stopPropagation()}>
        <form>
          <div className='CD_title'>Add new device</div>
          <input className='CD_input' placeholder='enter device' /> 
          <select >
            {device.types.map(type => 
              <option key={type.id}>{type.name}</option>
              )}
          </select>
          <select >
            {device.brands.map(brand => 
              <option key={brand.id}>{brand.name}</option>
              )}
          </select>
          <input placeholder='Enter name' />
          <input placeholder='Enter price' type={'number'} />
          <input placeholder='Enter name' type={'file'} />
        </form>
        <form>
          {/* <button onClick={addInfo }>
            Add description
          </button> */}
          
        </form>

        <div className='CD_buttons'>
          <button >Add device</button>
          <button onClick={() => setActive2(false)}>Cancel</button>
       </div>
        </div>
    </div>
  )
}

export default CreateDevice