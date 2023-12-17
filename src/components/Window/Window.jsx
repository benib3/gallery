import React from 'react'

import { object_images } from '../utils';
import './Window.css';
import { IconArrowDownSLine,IconArrowRigthSLine, FolderClosed, FolderOpen } from '../icons/icons';
console.log('====================================');
console.log(window.innerHeight);
console.log('====================================');

const Window = ({openWindow,closeWindow}) => {
  const [showFolderContent, setShowFolderContent] = React.useState(true);
  const [closePictureWindow,setClosePictureWindow] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState({});

  const animationMinimazeWindow = openWindow ? 'animate__zoomIn' : 'animate__zoomOutDown ';
  

  return (
    <>
    <div className={`container animate__animated ${animationMinimazeWindow}`}>
       <div className='card'> 
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills justify-content-end ">
              <li className="nav-item mouse-pointer" onClick={()=>closeWindow(false)}>
                <div className="nav-link" >_</div>
              </li>
              <li className="nav-item">
                <div className="nav-link disabled">{'<>'}</div>
              </li>
              <li className="nav-item mouse-pointer">
                <div className="nav-link disabled" >X</div>
              </li>
            </ul>
          </div>
      

          <div className='d-flex'>
            <div className="card-navbar ">
              
              <ul className="list-group list-group-flush text-start">
                <li className="list-group-item on-hover"><FolderClosed/> This PC</li>
                <li className="list-group-item on-hover"><FolderClosed/> Desktop</li>
                <li className="list-group-item on-hover"><FolderClosed/> Documents</li>          
                <li className="list-group-item active"><FolderOpen/> Pictures</li>
                <li className="list-group-item on-hover"><FolderClosed/> Music</li>
                <li className="list-group-item on-hover"><FolderClosed/> Videos</li>
                <li className="list-group-item on-hover"><FolderClosed/> Local</li>
                <li className="list-group-item on-hover"><FolderClosed/> Disk (C:)</li>
              </ul>
            </div>
              <div className="card-body" >
                <div className='row justify-content-start'>
                  <div className='col col-md-2 mouse-pointer' style={{width:'1rem'}} onClick={()=>setShowFolderContent(!showFolderContent)}>
                  {!showFolderContent ? (
                      <IconArrowRigthSLine/>
                  ):(
                      <IconArrowDownSLine/>
                  )}
               
                  
                  </div>
                  <div className='col-md-4 folderDir '>
                  Pictures/ 
                  <span className={showFolderContent ? 'font-bold':''}> Folder Arts</span> </div>
                  <div className='col col-md-12' ><hr/></div>             
                </div>
                 {
                  showFolderContent && (
                    <div className="folder-content row animate__animated animate__fadeIn">
                      {Object.keys(selectedImage).length === 0 ? (
                        // If there is no selected image, display the list of images
                        object_images.map((image, index) => (
                          <div key={index} className="col-md-3 on-hover p-1 mouse-pointer" onClick={() => {setClosePictureWindow(!closePictureWindow); setSelectedImage(image) }}>
                            <img src={image.img} className="img-fluid" />
                            <span className="d-block text-center text-gray">{image.title}</span>
                          </div>
                        ))
                      ) : (
                        // If there is a selected image, display only that image
                        <div className="col-md-12 animate__animated  animate__zoomIn p-1 mouse-pointer" onClick={() => {setSelectedImage({}) }}>
                          <img src={selectedImage.img} className="img-fluid" />
                          <span className="d-block text-center text-gray">{selectedImage.title}</span>
                        </div>
                      )}
                    </div>
                  )
                }


                   
              </div>
          </div>
      </div>
    </div>
    
  
    </>
  )
}



export default Window;