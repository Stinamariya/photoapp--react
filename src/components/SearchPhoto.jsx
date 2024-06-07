import React from 'react'
import NavBar from './NavBar'

const SearchPhoto = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <h1><center>SEARCH PHOTO</center></h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">ALBUM ID</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br />
                    <center><button className="btn btn-success">Submit</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPhoto