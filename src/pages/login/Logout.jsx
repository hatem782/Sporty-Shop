import React,{useEffect} from 'react';
import {logout} from "../../services/Auth";

function Logout() {
    useEffect(()=>{
        logout();
    },[])
  return <div></div>;
}
export default Logout;
