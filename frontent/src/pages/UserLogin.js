import React,{useState} from 'react'
import Header from '../components/header/Header'
import { Helmet } from 'react-helmet';
import { Link ,useNavigate,useLocation} from 'react-router-dom';
import './style.css';
import './cricket.css';
import './responsive.css';
import { TogglePassword} from '../FunctionData.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useAuth } from '../context/auth';

 
const UserLogin = () => {
     // Login with Email pass
     const [email, setUseremail] = useState('');
     const[password,setUserpassword] = useState('');
     const navigate = useNavigate();
     const location = useLocation();

     const [auth,setAuth] = useAuth();

     const loginHandleSubmit = async(e) =>{
         e.preventDefault()
         try{
              const res = await axios.post('http://localhost:8080/api/login',{email,password});
              if(res && res.data.success){
                 toast.success(res.data && res.data.message);
                //  user Token store
                 setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                   }); 
                   
                   localStorage.setItem('auth',JSON.stringify(res.data))
                   if(res.data.user.role === 1){
                      navigate("/admin/home")
                   }else{
                    navigate(location.state || '/');
                   }
                    
                }else{
                 toast.error(res.data.message);
               }
             }
             catch(error){
 
            toast.error("Something Went Wrong");
          }
     }
  return (
     <>
            <Helmet>
                <title>Cricfeel | Login</title>
            </Helmet>
            <Header />
            <ToastContainer style={{ zIndex: "999999" }}
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            <section className="login-section">
                <div className="container">
                    <div className="login-container">
                    <div id="login-with-username" className="login-with-usernames">
                            <form onSubmit={loginHandleSubmit}>
                            <div className="login-header">
                                <img src="assets/image/cricfeel-logo.png" width={200} height={20} alt="" />
                                <div className="heading">Login into Cricfeel</div>
                            </div>
                            <div className="mobile-input-div">
                                <div className="form-group">
                                    <input type="text" placeholder="Email" name="useremail" required  value={email} onChange={e => setUseremail(e.target.value)} className="frm-control" />
                                </div>
                                <div className="form-group mt-2 position-relative">
                                    <input type="password" id="password" name="user_password" required value={password}  onChange={(e)=>setUserpassword(e.target.value)} placeholder="Password" className="frm-control" />
                                    <i className="toggle-password fa fa-fw fa-eye-slash" id="toggler" onClick={TogglePassword} />
                                </div>
                            </div>
                            <button id="send-otp-button" className="send-otp sign-in">
                                Sign In
                            </button>
                            </form>
                            <div className="new-users">
                                <div className="new-to-sk">
                                    New Users? <a className="user-register" href='/login' >Register</a>
                                </div>
                                <a className="forget-button text-danger" >Forget password?</a>
                            </div>
                            <span className="or" />
                            <a className="sso-google-button sso-mobile-button" >
                                <img className="input-icon sso-icon" width={15} height={24} src="assets/images/img/mobile.svg" />
                                &nbsp;&nbsp; Sign in with Mobile
                            </a>
                            <a className="sso-google-button active">
                                <img className="input-icon sso-icon" width={24} height={24} src="assets/images/img/google.svg" />
                                &nbsp;&nbsp; Sign in with Google
                            </a>
                            <a className="sso-google-button sso-fb-button">
                                <img className="input-icon sso-icon" width={24} height={24} src="assets/images/img/facebook.svg" />
                                &nbsp;&nbsp; Continue with Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </section>
     </>
  )
}

export default UserLogin