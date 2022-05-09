import React from 'react'
import { AiOutlineStar, AiOutlineDollar } from "react-icons/ai";
import { useNavigate, useParams, NavLink, useLocation } from 'react-router-dom'
 
const DeviceItem = ({device}) => {

  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM
  //NEED FIGURE OUT WITH ROUTER DOM

  // let navigate = useNavigate();


    // const { id } = useParams();
    // console.log(id)

  // const goTo = () => {
  //   <NavLink to={'/device' + '/' + device.id}></NavLink>
  //   console.log('ee')
  // }

  // const location = useLocation()
  // console.log(location)

  
  return (
    <div style={{display: 'flex', marginRight: '16px', marginBottom: '16px', paddingRight: '16px'}}>
      <div className='item' 
      // onClick={
      //   // navigate(`'/device' + '/' + device.id`)
      //   // navigate(`/device/${device.id}`)
      // }
      style={{border: 'solid grey 1px', padding: '12px', marginTop: '10px'}}
      >
        <div className='item_img'>
          {device.img}
          
        </div>
        <div className='item_text'>
          <div>
            {device.name}
          </div>
          <div>
            {device.price} <AiOutlineDollar />
          </div>
          <div>
            {device.raiting} <AiOutlineStar /> 
          </div>
          {/* <button onClick={<NavLink to={'/device' + '/:id'}>{device.name}</NavLink>}>go to</button>
          <NavLink to={'/device' + '/:id'}>{device.name}</NavLink>
          <NavLink to={'/device/:id'}>{device.name}</NavLink> */}
          <NavLink to={'/device' + '/' + device.id}>{device.name}</NavLink>
        </div>
      </div>
    </div>
     
  )
}

export default DeviceItem