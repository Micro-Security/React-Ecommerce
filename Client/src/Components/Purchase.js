import React from 'react';
import { Link } from "react-router-dom";
import './Purchase.css';

function Purchase(props) {
    return (
        <div className="container">
            <div className="jumbotron prm">
                <h1 className="display-4 text-center prh">Hurray!!</h1>
                <p className="lead text-center prp">You have successfully purchased the product</p>
                <p className="lead text-center prp">Your product will be delivered shortly at your address</p>
                <hr className="my-4" />
                <p className="lead"></p>
                <div className="prt">
                    <Link className="btn btn-outline-primary rounded-pill btn-lg" to="" role="button">Go to HomePage</Link>
                </div>
            </div>
        </div>

    );
}

export default Purchase;