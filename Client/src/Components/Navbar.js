import React from 'react';
import { NavLink } from 'react-router-dom';

const Render = () => {
    const isLogin = localStorage.getItem("login");
    if (!isLogin) {
        return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/" aria-current="page" >Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/Cart" aria-current="page" ><i className="fa fa-shopping-cart" style={{ fontSize: "24px" }}></i> Cart</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/Register" aria-current="page" >Register</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/Login" aria-current="page" >Login</NavLink>
                </li>
            </>
        );
    }
    else{
        return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/" aria-current="page" >Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/Profile" aria-current="page" >Profile</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/Cart" aria-current="page" ><i className="fa fa-shopping-cart" style={{ fontSize: "24px" }}></i> Cart</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/Logout" aria-current="page" >Logout</NavLink>
                </li>
            </>
        );
    }
    
}
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">E-mart</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-5 ms-auto  mb-2 mb-lg-0" >
                            <Render />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;