import React from 'react'
import './SideBarOption.css'



function SideBarOption({title,Icon }) {
  return (
    <div className='Sidebaroption'>
        {Icon && <Icon className='Sidebaroption__icon'/>}
        {Icon ? <h4>{title}</h4>: <p>{title}</p>} 

    </div>
  )
}

export default SideBarOption