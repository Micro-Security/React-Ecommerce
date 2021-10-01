import React,{useState} from 'react';
import './Login.css';
import { Link,useHistory } from "react-router-dom";

function Login() {
    const history=useHistory();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const submitLogin=async (e)=>{
           e.preventDefault();

           const res=await fetch("http://localhost:5000/Signin",{
               method:"POST",
               headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
               body:JSON.stringify({
                   email,password
               })
           });
           const data=await res.json();

           if(data.status===400||!data){
               window.alert("Invalid Credentials!!");
           }else{
               window.alert("Login Successful!!");
                localStorage.setItem("email",email);
                localStorage.setItem("login",true);
               history.push("/");
           }
    }
    return (
        <div className="container">
            <div className="lf">
                <h3 className="lh">Login</h3>
                <form method="POST" className="lo" >
                    <div className="form-group row mt-4">
                        <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label">Email </label>
                        <input type="email" className="li form-control" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="form-group row mt-4">
                        <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label">Password</label>
                        <input type="password" className="li form-control" name="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
                    </div>
                    <div className="ld mt-3">
                        <input type="submit" className="btn rounded-pill btn-outline-primary " name="submit" onClick={submitLogin} value="Register" />
                    </div>
                    <p className="la">Don't have an account?<Link className="text-decoration-none" to="Register">Register</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;