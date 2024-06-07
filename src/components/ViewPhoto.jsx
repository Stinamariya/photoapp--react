import React from 'react'
import NavBar from './NavBar'

const ViewPhoto = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <h1><center>VIEW PHOTO</center></h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card">
  <img src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg"height="250px" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">photo 1</h5>
    <a href="#" class="btn btn-primary">More</a>
  </div>
</div>
<br />

<div class="card">
  <img src="https://w0.peakpx.com/wallpaper/203/1010/HD-wallpaper-forest-flora-forest-vithurshan-dark-europe-faded-green-leaf-mood-moody-sri-lanka-vithurshan-jpeg-wood.jpg"height="250px" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">photo 2</h5>
    <a href="#" class="btn btn-primary">More</a>
  </div>
</div>

                            

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewPhoto