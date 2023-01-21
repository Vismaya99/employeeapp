import React from 'react'
import Navbar from './Navbar'

const Form = () => {
  return (
    <div><Navbar/>
    <div className="container">
        
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder='Enter your name' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Designation</label>
                        <input type="text" className="form-control" placeholder='Enter your position' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Location</label>
                        <input type="text" className="form-control" placeholder='Enter your location' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Salary</label>
                        <input type="text" className="form-control" placeholder='Enter your salary' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br />
                        <button className="btn btn-warning">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    </div></div>
  )
}

export default Form