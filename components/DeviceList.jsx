import React from 'react'
import { useContext, useState } from 'react'
import { Context } from '..'
import DeviceItem from './DeviceItem'

const DeviceList = () => {

   const {device} = useContext(Context)

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
       {device.devices.map( device => 
         <DeviceItem key={device.id} device={device}/>
         )}
    </div>
  )
}

export default DeviceList