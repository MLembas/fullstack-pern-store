import React from 'react'
import './CBStyles.css'

const CreateBrand = ({active1, setActive1}) => {
  return (
    <div className={active1 ? "CB_wrapper active" : "CB_wrapper"} onClick={() => setActive1(false)}>

       <div className={active1 ? 'CB_content active' : 'CB_content'}onClick={e => e.stopPropagation()}>
        <form>
          <div className='CB_title'>Add new brand</div>
          <input className='CB_input' placeholder='enter brand' /> 
        </form>
        <div className='CB_buttons'>
          <button >Add brand</button>
          <button onClick={() => setActive1(false)}>Cancel</button>
       </div>
        </div>
    </div>
  )
}

export default CreateBrand