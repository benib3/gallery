import { object_images } from '../utils';

const Mobile = () => {

  return (
      <div className='container overflow-auto  p-1'>
          <div className="row">
          { object_images.map((image, index) => (
                          <div key={index} className="col-lg-4 col-md-12 mb-4 mb-lg-0 mouse-pointer ">
                            <img src={image.img} className="img-fluid shadow-1-strong rounded mb-1" />
                            <span className="d-block text-center text-white">{image.title}</span>
                          </div>
                        ))}
        
          </div>
      </div>
  )
}

export default Mobile