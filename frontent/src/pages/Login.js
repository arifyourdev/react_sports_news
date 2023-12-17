import React, { useState } from 'react'
import Header from '../components/header/Header'
import { Helmet } from 'react-helmet';
import { Link ,useNavigate} from 'react-router-dom';
import './style.css';
import './cricket.css';
import './responsive.css';
import { TogglePassword, TogglePassword2, TogglePassword3, SignWithUser, SignWithMobile, OpenRegister, OpenForgetpass } from '../FunctionData.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
 
const Login = () => {
    const [showlogin, setActivetab] = useState(1);
    const ToggleTab = (index) => {
        setActivetab(index)
    }
    const ActiveTab = (index, activeclass) =>
        showlogin === index ? activeclass : "";

    //  Start Registration
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [confirmpass, setConfirmpass] = useState()

    const navigate = useNavigate();
   
  

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
             const res = await axios.post('http://localhost:8080/api/register',{ name, email, password ,role:"0"});
            if (res && res.data.success) {
              toast.success(res.data && res.data.message);
               const timeout = setTimeout(() => {
                       navigate('/ipl');
               }, 2000)
              return () => clearTimeout(timeout);
              
            } else {
              toast.error(res.data.message);
            }
      
          } catch (error) {
            toast.error("Something Went Wrong");
          }
    }

    // Login with Email pass
    const [email2, SetEmail2] = useState('');
    const[password2,SetPassword2] = useState('');

    const loginHandleSubmit = async(e) =>{
        e.preventDefault()
        try{
             const res = await axios.post('http://localhost:8080/api/login',{email2,password2});
             if(res && res.data.success){
                toast.success(res.data && res.data.message);
                 navigate('/');
              }else{
                toast.error(res.data.message);
              }
            }
            catch(error){

           toast.error("Something Went Wrong");
         }
    }


    // Login with OPt
    const [phone, setPhone] = useState();
    const SubmitOtpHandle = (e) => {
        e.preventDefault();
        console.log(phone)
        setPhone("")
    }
    return (
        <>
            <Helmet>
                <title>Cricfeel | Login</title>
            </Helmet>
            <Header />
            <div>
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
            </div>
            <section className="login-section">
                <div className="container">
                    <div className="login-container">
                        {/* Login */}
                        <div id="login-with-otp">
                            <div className="login-header">
                                <img src="assets/image/cricfeel-logo.png" width={200} height={20} alt="" />
                                <div className="heading">Enter your mobile number</div>
                                <div className="sub-text">
                                    We will send you a 6 digit verification code
                                </div>
                            </div>
                            <form onSubmit={SubmitOtpHandle}>
                                <div className="mobile-input-div">
                                    <input id="phone" name="phone" type="tel" onChange={(e) => setPhone(e.target.value)} value={phone} className="intel-control" placeholder="Enter Phone" />
                                </div>
                                <button id="send-otp-button" className="send-otp">
                                    Send OTP
                                </button>
                            </form>
                            <span className="or" />
                            <Link className="sso-google-button active">
                                <img className="input-icon sso-icon" width={24} height={24} src="assets/images/img/google.svg" />
                                Sign in with Google
                            </Link>
                            <Link className="sso-google-button sso-username-button" onClick={SignWithUser}>
                                <img className="input-icon sso-icon" width={24} height={24} src="assets/images/img/email.svg" />
                                Sign in with Username
                            </Link>
                            <Link className="sso-google-button sso-fb-button">
                                <img className="input-icon sso-icon" width={24} height={24} src="assets/images/img/facebook.svg" />
                                Continue with Facebookn
                            </Link>
                        </div>
                        {/* Login With UserName */}
                        <div id="login-with-username" className="login-with-username">
                            <form onSubmit={loginHandleSubmit}>
                            <div className="login-header">
                                <img src="assets/image/cricfeel-logo.png" width={200} height={20} alt="" />
                                <div className="heading">Login into Cricfeel</div>
                            </div>
                            <div className="mobile-input-div">
                                <div className="form-group">
                                    <input type="text" placeholder="Email" name="email2"  onChange={(e)=>SetEmail2(e.target.value)} value={email2} className="frm-control" />
                                </div>
                                <div className="form-group mt-2 position-relative">
                                    <input type="password" id="password" name="password2" onChange={(e)=>SetPassword2(e.target.value)} value={password2} placeholder="Password" className="frm-control" />
                                    <i className="toggle-password fa fa-fw fa-eye-slash" id="toggler" onClick={TogglePassword} />
                                </div>
                            </div>
                            <button id="send-otp-button" className="send-otp sign-in">
                                Sign In
                            </button>
                            </form>
                            <div className="new-users">
                                <div className="new-to-sk">
                                    New Users? <a className="user-register" onClick={OpenRegister}>Register</a>
                                </div>
                                <a className="forget-button text-danger" onClick={OpenForgetpass}>Forget password?</a>
                            </div>
                            <span className="or" />
                            <a className="sso-google-button sso-mobile-button" onClick={SignWithMobile}>
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
                        {/* User Signup */}
                        <div id="username-signup">
                            <form onSubmit={handleRegistration}>
                                <div className="login-header">
                                    <img src="assets/image/cricfeel-logo.png" width={200} height={20} alt="" />
                                    <div className="heading">Signup into Cricfeel</div>
                                </div>
                                <div className="mobile-input-div">
                                    <div className="form-group">
                                        <input type="text" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className="frm-control" />
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="text" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} value={name} className="frm-control" />
                                    </div>
                                    <div className="form-group mt-2 position-relative">
                                        <input type="password" id="password2" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} className="frm-control" />
                                        <i className="toggle-password fa fa-fw fa-eye-slash" id="toggler2" onClick={TogglePassword2} />
                                    </div>
                                    {/* <div className="form-group mt-2 position-relative">
                                        <input type="password" id="password3" placeholder="Password" name="confirmpass" onChange={(e) => setConfirmpass(e.target.value)} value={confirmpass} className="frm-control" />
                                        <i className="toggle-password fa fa-fw fa-eye-slash" id="toggler3" onClick={TogglePassword3} />
                                    </div> */}
                                    <div className="gs-checkmark">
                                        <input id="register-terms-checkbox" className="gs-checkbox" type="checkbox" />
                                        <span>
                                            I agree to Cricfeel's <a href="">Terms</a> and
                                            <Link to="">Privacy policies</Link>.
                                        </span>
                                    </div>
                                </div>
                                <button id="send-otp-button" className="send-otp sign-in">
                                    Register
                                </button>
                            </form>
                            <div className="new-users">
                                <div className="new-to-sk">
                                    Have an Account?{" "}
                                    <a className="user-registers text-danger sso-username-button" style={{ cursor: "pointer" }} onClick={SignWithUser} >
                                        Login
                                    </a>
                                </div>
                                <a className="gs-try-another sso-username-button">
                                    Try another login method{" "}
                                </a>
                            </div>
                        </div>
                        {/* Forget Password */}
                        <div id="user-forget-password">
                            <div className="login-header">
                                <img src="assets/image/cricfeel-logo.png" width={200} height={20} alt="" />
                                <div className="heading">Forgot Password</div>
                            </div>
                            <div className="mobile-input-div">
                                <div className="form-group">
                                    <input type="text" placeholder="Email" className="frm-control" />
                                </div>
                            </div>
                            <button id="send-otp-button" className="send-otp sign-in">
                                Send
                            </button>
                            <div className="new-users">
                                <div className="new-to-sk">
                                    Have an Account?
                                    <a className="user-registers text-danger sso-username-button" style={{ cursor: "pointer" }} onClick={SignWithUser} >
                                        Login
                                    </a>
                                </div>
                                <a className="gs-try-another sso-username-button" onClick={SignWithUser}>
                                    Try another login method
                                </a>
                            </div>
                        </div>
                        <div className="login-footer">
                            <img
                                className="login-img"
                                height={103}
                                width={212}
                                src="assets/images/img/login-img.svg"
                            />
                            <label className="i-agree">
                                By signing in with Google or Facebook, you agree to Cricfeel's{" "}
                                <a className="policies" href="terms-of-use.php">
                                    Terms
                                </a>{" "}
                                and{" "}
                                <a className="policies" href="privacy-policy.php">
                                    Privacy policies
                                </a>
                                .
                            </label>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login