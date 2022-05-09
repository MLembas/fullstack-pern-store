import React, { useEffect } from 'react'
import { useNavigate, useParams, NavLink, useLocation } from 'react-router-dom'
import img from '../assets/phone.jpg'
import { AiOutlineStar, AiOutlineDollar } from "react-icons/ai";

const DevicePage = () => {
  const device = {id: 1, name: "Iphone 11", price: 3000, raiting: 5, img: '#'}

  const location = useLocation()
  const {pathname} = useLocation()

  useEffect(() => {
    console.log(location)
    console.log('the route is ' + pathname)
  })
  return (
    <div>
      <div className='container' style={{paddingLeft: '0px', marginLeft: '0px', display: 'flex'}}>
        <div className='img'>
          <img src={img} width={300} height={300} />
        </div>
        <div className='about' style={{display: 'flex', flexDirection: 'column', marginLeft: '30px', marginRight: '30px'}}>
          <div>{device.name}</div>
          <div>{device.raiting} <AiOutlineStar /></div>
          <div>{device.price} <AiOutlineDollar /></div>
        </div>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default DevicePage