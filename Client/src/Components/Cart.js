import React, { useState, useEffect } from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';

function Cart() {
    const [cdata, setcdata] = useState([]);
    const [tdata, settdata] = useState([]);
    const about = async () => {
        try {
            const uemail = localStorage.getItem("email");
            const res = await fetch("http://localhost:5000/Cart/" + uemail, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });
            const data = await res.json();
            setcdata(data.items);
            settdata(data);
    

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const del = async () => {
        try {
            const uemail = localStorage.getItem("email");
            const res = await fetch("http://localhost:5000/Cart/" + uemail, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });
            const data = await res.json();
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
            <h1 className="text-center mt-3 text-primary">Cart</h1>
            <table className="table table-bordered mt-5 w-auto ct">
                <thead>
                    <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cdata.map(a => {
                        return (
                            <tr key={a._id}>
                                <td>{a.productName}</td>
                                <td>{a.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="cd row ">
                <h3 className="col-2 ch text-primary" >Total Price:</h3>
                <p className="col-2 cp text-primary" >₹{tdata.totalPrice}</p>
            </div>

            <div className="text-center mt-3">
                <Link className="btn btn-outline-primary rounded-pill" to="Purchase" onClick={del} >Buy Now</Link>
            </div>
        </div>
    );
}

export default Cart;