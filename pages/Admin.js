import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import CreateType from '../components/modals/CreateType'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'

const Admin = () => {
  let navigate = useNavigate();

  const [popActive, setPopActive] = useState(true)
  const [popActive1, setPopActive1] = useState(true)
  const [popActive2, setPopActive2] = useState(true)

  return (
    <div>
      <div>
        <button onClick={() => setPopActive(true)}>Add type</button>
        <button onClick={() => setPopActive1(true)}>Add brand</button>
        <button onClick={() => setPopActive2(true)}>Add device</button>
      </div>
      <CreateType active={popActive} setActive={setPopActive} />
      <CreateBrand active1={popActive1} setActive1={setPopActive1} />
      <CreateDevice active2={popActive2} setActive2={setPopActive2} />
    </div>
  )
}

export default Admin