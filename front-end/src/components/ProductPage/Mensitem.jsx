import React from 'react'
import Mensitemcrum from './bredcrum/Mensitemcrum'
import Alltshirt from './item/Alltshirt'
import Crewneck from './item/Crewneck'
import Graphictree from './item/Graphictree'
import Henly from './item/Henly'
import Oversized from './item/Oversized'
import Vneck from './item/Vneck'
import AllTop from './item/women/AllTop'

const Mensitem = () => {
  return (
    <div className='item1'>
      <h1>Men's T-Shirts</h1>
      <div className='itemmenscrum'>
      <Mensitemcrum/>
      </div>
     
      <div className='item2'>
      <Alltshirt/>
        
       

      </div>
    </div>
  )
}

export default Mensitem
