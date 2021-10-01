import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Edit(props) {
    return (
        <div className="container">
            <div className="re">
                <h3 className="rn">Edit Details</h3>
                <form className="ro">
                    <div className="form-group row mt-3">
                        <label htmlFor="exampleFormControlInput1" className="rl col-sm-2 col-form-label">Name</label>
                        <input type="text" className="ri form-control" id="exampleFormControlInput1" value="user.name" />
                    </div>
                    <div className="form-group row mt-4">
                        <label htmlFor="exampleFormControlInput1" className="rl col-sm-2 col-form-label">Email </label>
                        <input type="email" className="ri form-control" id="exampleFormControlInput1" value="user.email" />
                    </div>
                    <div className="form-group row mt-4">
                        <label htmlFor="exampleFormControlInput1" className="rl col-sm-2 col-form-label">Password</label>
                        <input type="password" className="ri form-control" id="exampleFormControlInput1" value="user.password" />
                    </div>
                    <div className="form-group row  mt-4">
                        <label htmlFor="exampleFormControlInput1" className="rl col-sm-2 col-form-label">Contact</label>
                        <input type="number" className="ri form-control" id="exampleFormControlInput1" value="user.contact" />
                    </div>
                    <div className="form-group row  mt-4">
                        <label htmlFor="exampleFormControlInput1" className="rl col-sm-2 col-form-label">Street</label>
                        <input type="text" className="ri form-control" id="exampleFormControlInput1" value="user.street" />
                    </div>
                    <div className="form-group row  mt-4">
                        <label htmlFor="exampleFormControlInput1" className="rl col-sm-2 col-form-label">City</label>
                        <input type="text" className="ri form-control" id="exampleFormControlInput1" value="user.city" />
                    </div>
                    <div className="form-group row  mt-4">
                        <label htmlFor="exampleFormControlInput1" className="rl col-sm-2 col-form-label">State</label>
                        <input type="text" className="ri form-control" id="exampleFormControlInput1" value="user.state" />
                    </div>
                    <div className="rd mt-4">
                        <input type="submit" className="btn rounded-pill btn-outline-primary " value="Update" />
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Edit;