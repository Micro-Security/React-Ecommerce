import React,{useState} from 'react';
import './Register.css';
import { Link , useHistory} from "react-router-dom";

function Register() {
    const history=useHistory();

    const [user,setUser]=useState({
        name: "", email:"", password:"",contact:"",street:"",city:"",state:""
    });

    let name,value;
    const submit=(e)=>{
            name=e.target.name;
            value=e.target.value;

            setUser({...user,[name]:value});
    }

    const postdata=async (e)=>{
           e.preventDefault();

           const {name,email,password,contact,street,city,state}=user;

           const res=await fetch("http://localhost:5000/User",{
               method:"POST",
               headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
               body:JSON.stringify({
                   name,email,password,contact,street,city,state
               })
           });
           const data=await res.json();

           if(data.status===400||!data){
               window.alert("Fill data correctly!!");
           }else{
               window.alert("Registration Successful!!");

               history.push("/Login");
           }
    }
    return (
        <div className="container">
            <div className="re">
                <h3 className="rn">Enter Details</h3>
                <form method="POST" className="ro " >
                    <div className="form-group row mt-3">
                        <label htmlFor="exampleFormControlInput1" className=" rl col-sm-2 col-form-label">Name</label>
                        <input type="text" className="ri form-control" name="name" value={user.name} onChange={submit}  required />
                    </div>
                    <div className="form-group row mt-4">
                        <label htmlFor="exampleFormControlInput1" className=" rl col-sm-2 col-form-label">Email </label>
                        <input type="email" className="ri form-control" name="email" value={user.email} onChange={submit}  required />
                    </div>
                    <div className="form-group row mt-4">
                        <label htmlFor="exampleFormControlInput1" className=" rl col-sm-2 col-form-label">Password</label>
                        <input type="password" className="ri form-control" name="password" value={user.password} onChange={submit}  required />
                    </div>
                    <div className="form-group row  mt-4">
                        <label htmlFor="exampleFormControlInput1" className=" rl col-sm-2 col-form-label">Contact</label>
                        <input type="number" className="ri form-control" name="contact" value={user.contact} onChange={submit}  required />
                    </div>
                    <div className="form-group row  mt-4">
                        <label htmlFor="exampleFormControlInput1" className=" rl col-sm-2 col-form-label">Street</label>
                        <input type="text" className="ri form-control" name="street" value={user.street} onChange={submit}  required />
                    </div>
                    <div className="form-group row  mt-4">
                        <label htmlFor="exampleFormControlInput1" className=" rl col-sm-2 col-form-label">City</label>
                        <input type="text" className="ri form-control" name="city" value={user.city} onChange={submit}  required />
                    </div>
                    <div className="form-group row  mt-4">
                        <label htmlFor="exampleFormControlInput1" className=" rl col-sm-2 col-form-label">State</label>
                        <input type="text" className="ri form-control" name="state" value={user.state} onChange={submit}  required />
                    </div>
                    <div className="rd mt-3">
                        <input type="submit" className="btn rounded-pill btn-outline-primary " name="submit" onClick={postdata} value="Register" />
                    </div>
                    <p className="ra">Already have an account?<Link className="text-decoration-none" to="Login">Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Register;