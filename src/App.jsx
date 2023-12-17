import { useState } from 'react'
import { isMobile, isTablet } from 'react-device-detect';
import './App.css'

import Window from './components/Window/Window'
import Toolbar from './components/Toolbar/Toolbar';
import Loader from './components/Loader/Loader';
import Starfield from 'react-starfield';
import Mobile from './components/Mobile/Mobile';
function App() {
  const [openWindow,setOpenWindow] = useState(false);


  return (
    <>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.02}
        backgroundColor="black"
      />
      
      {isMobile || isTablet ? (
        <>
        <Loader/>
         <Mobile/>
        </>
       
      ):(
        <>
        <Loader/>
        <Window openWindow={openWindow}  closeWindow={setOpenWindow}/>
        <Toolbar onClick={()=>setOpenWindow(!openWindow)} openedWindow={openWindow}/>   
        </>
      )}

    
    </>
  )
}

export default App
