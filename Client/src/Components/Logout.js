import React,{useEffect} from 'react';
import { useHistory } from 'react-router';

function Logout(props) {
    const history=useHistory();
    const logout=()=>{
       localStorage.removeItem("email");
       localStorage.setItem("login",false);
       history.push("/Login");
   }
    useEffect(()=>{
       logout();
   },[]);
    return (
        <div>
            
        </div>
    );
}

export default Logout;