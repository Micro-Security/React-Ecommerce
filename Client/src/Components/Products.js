import React, { useState, useEffect } from 'react';
import './Products.css';
import { Link} from "react-router-dom";

function Products() {

    const [Pdata, setPdata] = useState([]);

    const about = async () => {
        try {
            const res = await fetch("http://localhost:5000/Products", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });
            const data = await res.json();
            setPdata(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        about();
    }, []);
    return (
        <div className="container">
            <div className="pd">
                <div className="row ">
                    {Pdata.map(a => {
                        return (
                            <div key={a._id} className="col-3 pc card border-primary rounded" style={{ width: "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{a.Name}</h5>
                                    <p className="card-text text-primary">₹{a.Price}</p>
                                    <Link to={'/Product/'+a._id} className="btn pdb btn-outline-primary rounded-pill mx-auto d-block">Get Details</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Products;