import React from 'react'
import './Toolbar.css';
import { IconBxWindow } from '../icons/icons';
const Toolbar = ({onClick,openedWindow}) => {
  const openedStyle = openedWindow ? 'border-bottom bg-selected' : '';
  return (
   <footer className="footer fixed-bottom animate__animated animate_fadeIn">
   <div className='glass-bg'> 
      <div className="container text-center">
          <IconBxWindow color="white" className={`p-1 mouse-pointer bg-hover ${openedStyle}`} onClick={onClick}/>
      </div>
      </div>
    </footer>
  )
}

export default Toolbar