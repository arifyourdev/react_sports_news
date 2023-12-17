import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
     <>
       <div className="header">

        <div className="header-left">
            <Link to="/admin/home" className="logo">
                <img src="assets/img/logo.png" style={{width:"40px"}} alt=""/>
            </Link>
            <Link to="/admin/home" className="logo2">
                <img src="assets/img/logo2.png" style={{width:"40px"}} alt=""/>
            </Link>
        </div>

        <a id="toggle_btn" href="javascript:void(0);">
            <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </a>

        <div className="page-title-box">
            <h3>Dreamguy's Technologies</h3>
        </div>

        <a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars"></i></a>

        <ul className="nav user-menu">

            <li className="nav-item">
                <div className="top-nav-search">
                    <a href="javascript:void(0);" className="responsive-search">
                        <i className="fa fa-search"></i>
                    </a>
                    <form action="https://smarthr.dreamguystech.com/template/search.html">
                        <input className="form-control" type="text" placeholder="Search here"/>
                        <button className="btn" type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </li>
 
         
            <li className="nav-item dropdown has-arrow main-drop">
                <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                    <span className="user-img"><img src="assets/img/profiles/avatar-21.jpg" alt=""/>
                        <span className="status online"></span></span>
                    <span>Admin</span>
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="profile.html">My Profile</a>
                    <a className="dropdown-item" href="settings.html">Settings</a>
                    <a className="dropdown-item" href="index.html">Logout</a>
                </div>
            </li>
        </ul>


        <div className="dropdown mobile-user-menu">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i
                    className="fa fa-ellipsis-v"></i></a>
            <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="profile.html">My Profile</a>
                <a className="dropdown-item" href="settings.html">Settings</a>
                <a className="dropdown-item" href="index.html">Logout</a>
            </div>
        </div>

        </div>
     </>
  )
}

export default Header