import React, { useEffect,useState } from 'react';
import { Link,useHistory } from "react-router-dom";
import './Profile.css';

function Profile() {
    const history=useHistory();
    
    const [userdata,setUserdata]=useState([]);
    
   
    const about = async () => {
        try {
            const uemail=localStorage.getItem("email");
            const res = await fetch("http://localhost:5000/User/"+uemail, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });
            const data = await res.json();
            setUserdata(data);

            if (!res.status == 200) {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch (err) {
            console.log(err);
            history.push("/Login");
        }
    }

    useEffect(() => {
        about();
    }, []);
    return (
        <div className="container">
            <div className="uo">
                <h3 className="uh">Your Profile</h3>
                <div className="uf row mt-3">
                    <label className="ul col-sm-2 ">Name :</label>
                    <p className="up col-sm-2">{userdata.name}</p>
                </div>
                <div className="uf row mt-4">
                    <label className="ul col-sm-2 ">Email :</label>
                    <p className="up col-sm-2">{userdata.email}</p>
                </div>
                <div className="uf row  mt-4">
                    <label className="ul col-sm-2 ">Contact :</label>
                    <p className="up col-sm-2">{userdata.contact}</p>
                </div>
                <div className="uf row  mt-4">
                    <label className="ul col-sm-2 ">Street :</label>
                    <p className="up col-sm-2">{userdata.street}</p>
                </div>
                <div className="uf row  mt-4">
                    <label className="ul col-sm-2 ">City :</label>
                    <p className="up col-sm-2">{userdata.city}</p>
                </div>
                <div className="uf row  mt-4">
                    <label className="ul col-sm-2 ">State :</label>
                    <p className="up col-sm-2">{userdata.state}</p>
                </div>
                <div className="ub">
                    <Link className="btn btn-outline-primary rounded-pill b" to="Edit">Edit Details</Link>
                </div>
            </div>

        </div>
    )
}

export default Profile;