import React from 'react'

import Navitem from '../navitem/Navitem';

function Navbar() {
  const menu=[
    {
      name:'HOME',
     
    },
    {
      name:'SEACH',
    
    },
     {
      name:'LIBRARY',
    
    },
    {
      name:'VIEW LIST',
      
    },
    {
      name:'SHARE',
    }
  ]
  return (
    <div>
      <div className="main text-white">
       <div className="container flex gap-4 items-center">
        <div className="left">
          <img src="image/img1.jpeg" alt="" className='w-[80px] md:w-[100px] lg:w-[110px]' />
        </div>
        <div className="mid flex gap-4">
        {menu.map((item)=>(
          <Navitem name={item.name}  />         
        ))}
        </div>
       </div>
      </div>
    </div>
  )
}

export default Navbar
