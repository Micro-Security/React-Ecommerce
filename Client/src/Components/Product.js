import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Product.css';

function Product() {
    const { id } = useParams();

    const [items, setPdata] = useState([]);

    const uemail = localStorage.getItem("email");
    const about = async () => {
        try {
            const res = await fetch("http://localhost:5000/Products/" + id, {
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

    const add = async (e) => {
        e.preventDefault();
        console.log(uemail);
        const res = await fetch("http://localhost:5000/Cart/" + uemail + "/" + id, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        });
        const data = await res.json();

        if (data.status === 400 || !data) {
            window.alert("Server Error!!");
        } else {
            window.alert("Added Successful!!");
        }
    }

    useEffect(() => {
        about();
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 di">
                    <img src={items.image} alt="product" />
                </div>
                <div className="col-4">
                    <div className="dfo">
                        <div className=" row mt-3 dn">
                            <p className="dp col-sm">{items.Name}</p>
                        </div>
                        <div className=" row mt-2">
                            <label className="dl col-sm ">OS :</label>
                            <p className="dp col-sm">{items.OS}</p>
                        </div>
                        <div className=" row mt-2">
                            <label className="dl col-sm ">Display :</label>
                            <p className="dp col-sm">{items.Display}</p>
                        </div>
                        <div className=" row  mt-2">
                            <label className="dl col-sm ">Processor :</label>
                            <p className="dp col-sm">{items.Processor}</p>
                        </div>
                        <div className=" row  mt-2">
                            <label className="dl col-sm ">Memory:</label>
                            <p className="dp col-sm">{items.Memory}</p>
                        </div>
                        <div className=" row  mt-2">
                            <label className="dl col-sm ">Weight :</label>
                            <p className="dp col-sm">{items.Weight}</p>
                        </div>
                        <div className=" row  mt-2">
                            <label className="dl col-sm ">Dimensions :</label>
                            <p className="dp col-sm">{items.Dimension}</p>
                        </div>
                        <div className=" row  mt-2">
                            <label className="dl col-sm ">Graphics Processor :</label>
                            <p className="dp col-sm">{items.Graphics_Processor}</p>
                        </div>
                        <div className="row">
                            <div className="db col">
                                <Link className="b1 btn btn-outline-primary rounded-pill db" to="/Purchase">Buy Now</Link>
                            </div>
                            <div className="db col">
                                <button name="submit" onClick={add} className="b1 btn btn-outline-primary rounded-pill db" >Add to Cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product;
