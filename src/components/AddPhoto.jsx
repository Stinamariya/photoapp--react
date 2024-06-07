import React from 'react'
import NavBar from './NavBar'

const AddPhoto = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <h1><center>ADD PHOTO</center></h1>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div styleName={"col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"}>
                            <label htmlFor="" className="form-label">ALBUM ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div styleName={"col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"}>
                            <label htmlFor="" className="form-label">ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div styleName={"col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"}>
                            <label htmlFor="" className="form-label">TITLE</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div styleName={'col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'}>
                            <label htmlFor="" className="form-label">URL</label>
                            <input type="file" name="" id="" className="form-control" />
                        </div>
                    </div>
                    <div styleName={'col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'}>
                        <br />
                        <center><button className="btn btn-success">Add</button></center>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default AddPhoto