import React, { useContext, useState } from 'react'
import { Context } from '..'

const BrandBar = () => {
   const {device} = useContext(Context)
   const [selectedBrand, setSelectedBrand] = useState('')
   const [color, setColor] = useState('')
   console.log(selectedBrand)

   // const setColor = () => {
   //    brand
   // }

   const handleClick = () => {
      setColor({bgColor: 'red'});
    }

  return (
    <div className='wrapper'>
      <div className='container' style={{padding: '0px'}}>
         <div className='brands-list' style={{display: 'flex', marginBottom: '12px', cursor: 'pointer'}}>

            {device.brands.map(brand => 
            <div key={brand.id} style={{marginRight: '12px'}} 
            // onClick={() => setSelectedBrand(brand)}>// recive oject
            // to recive only name brand.name
            onClick={() => {setSelectedBrand(brand.name); handleClick()}}
            > 
               {brand.name}
            </div>
            )}

         </div>
      </div>
    </div>
  )
}

export default BrandBar