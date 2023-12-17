import {useState,useEffect} from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import Spinner from "../../pages/Spinner";

export default function AdminRoute() {

    const [ok,setOk] = useState(false)
    const[auth,setAuth] = useAuth();

    useEffect(()=>{
        const authCheck = async()=>{
            const res = await axios.get("http://localhost:8080/api/admin-auth")
             if(res.data.ok){
               setOk(true)
             }else{
                setOk(false)
            }
         }
         if(auth?.token) authCheck()
    },[auth?.token])

    return ok ? <Outlet/> : <Spinner path=""/>;
}