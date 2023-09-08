import React from 'react'
import sidebarOption from './SidebarOption.css';

function SidebarOption({text, Icon}) {
  return (
    <div className='sidebarOption'>
        <Icon/>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption