import React, { useState } from 'react';
import "./header.css";
import Logo from "../../images/logo/logo.png";
import MenuIcon from "../../images/logo/btn-menu.svg";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const Header = () => {
   const [auth,setAuth] = useAuth()

   const handleLogout = () =>{
      setAuth({
         ...auth,
         user:null,
         token:"",
      });
      localStorage.removeItem("auth") 
   }

  const [show,setShow] = useState(false)

  const toggleShow = () =>{
   setShow(!show)
  }

   return (
      <>
         <header>
            <div className="container-fluid">
               <div className="main-header">
                  <div className="col-flex-1">
                     <div className="leftMenu">
                        <div id="main-menu" className="leftmenu" data-bs-toggle="offcanvas" data-bs-target="#leftMenu">
                           <img width={18} height={12} src={MenuIcon} alt="" />
                        </div>
                        <div className="logo">
                           <Link to="/"><img src={Logo} alt="" /></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-flex-2">
                     <div className="main-navbar">
                        <ul className="menu-items">
                           <li><Link to="/" className="active">Home</Link></li>
                           <li><Link to="/cricket">Cricket</Link></li>
                           <li><Link to="/ipl" className="actve">IPL 2023</Link></li>
                           <li><Link to="/football">Football</Link></li>
                           <li><Link to="/tennis">Tennis</Link></li>
                           <li><Link to="#">More</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-flex-3">
                     <div className="rightHead">
                        <div className="rightLeft">
                           <div className="sport-search">
                              <a href="/find"><img src="assets/images/search.svg" alt="" /></a>
                           </div>

                        </div>
                        <div className="rightLogin">
                           {
                              !auth.user ? (
                                 <div className="sportLogin">
                                  <Link to="/n_login" className="login-btn">Login</Link>
                                 </div>
                              ) : (
                                 <div className="sportLogin">
                                   <img onClick={toggleShow} src='assets/images/img/unnamed.png' className='user_login_nav'/>
                                   {
                                    show &&  
                                    <div className='t-nav-content'>
                                       <div className='user-login-box'>
                                          <div className='topLeft'>
                                             <img src=" assets/images/img/unnamed.png" className='lb-img'/>
                                             <div className='l-content'>
                                                <div className='u-name'>{auth.user.name}</div>
                                                <div>#update your status</div>
                                             </div>
                                          </div>
                                          <div className='user-logout'>
                                             <Link onClick={handleLogout} to="/n_login" className='u-logout'>Logout</Link>
                                          </div>
                                       </div>
                                    </div>
                                   }
                                 </div>
                              )
                           }
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <div className="offcanvas offcanvas-start custom-offcanvas-css" id="leftMenu">
            <div className="offcanvas-body off-body">
               <div className="menu-body">
                  <div className="menu-search">
                     <label for="">🔍 Search</label>
                     <input type="text" className="menu-control" placeholder="Event, Team, Player, Sports" />
                  </div>


                  <div className="media-login-keeda">
                     <a href="login" className="media-login-btn">Login / Sign up </a>
                  </div>


                  <div className="personalize-feed">
                     <span><img src="assets/images/sidebarpersonalisefeed.svg" alt="" /> Personalize Your feed</span>
                  </div>
                  <section className="menu-popular">
                     <span className="title">🔥 Popular</span>
                     <ul className="popular-ul">
                        <li><a href="cricket.php">Cricket</a></li>
                        <li><a href="ipl.php">IPL 2023</a></li>
                        <li><a href="football.php">Football</a></li>
                        <li><a href="#">POP Culture</a></li>
                        <li><a href="#">Gaming</a></li>
                        <li><a href="#">Tennis</a></li>
                        <li><a href="#">Anime</a></li>
                        <li><a href="#">Basketball</a></li>
                     </ul>
                  </section>

                  <section>
                     <div id="accordion-1">
                        <div className="accordion-head">
                           <h6>🏃🏻‍♀️ SPORTS(30+)</h6>
                           <i className="fa-solid fa-angle-down arrow-dwn"></i>
                        </div>
                        <div className="accordioncontent">

                           <div id="accordion-1">
                              <div className="accordion-head">
                                 <h6>Cricket</h6>
                                 <i className="fa-solid fa-angle-down arrow-dwn"></i>
                              </div>
                              <div className="child-accordion-content">

                              </div>
                           </div>
                        </div>
                     </div>
                  </section>


                  <section className="menu-popular menu-links">
                     <span className="title">🔗 LINKS </span>
                     <ul className="popular-ul">
                        <li><a href="cricket">About us</a></li>
                        <li><a href="cricket">Write about us</a></li>
                        <li><a href="#">Policies</a></li>
                        <li><a href="#">Editorial Standards</a></li>
                        <li><a href="#">Journalism Awards </a></li>
                        <li><a href="#">Fact Check</a></li>
                        <li><a href="#">Affilliate Program</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">CSR</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Contact Us</a></li>
                     </ul>
                  </section>
               </div>
            </div>
         </div>
      </>
   )
}

export default Header