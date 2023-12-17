import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
 const [show,setShow] = useState();
  const showToggle = () =>{
    setShow(!show)
  }
  return (
    <>
 <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
         
            <ul className="sidebar-vertical">
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-dashboard" /> <span> Dashboard</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link className="active" to="admin/home">Admin Dashboard</Link></li>
                  <li><a href="employee-dashboard.html">Employee Dashboard</a></li>
                </ul>
              </li>
              <li>
                <Link to="/admin/category"><i className="la la-ticket" /> <span>Category</span></Link>
              </li>
              <li>
                <Link to="/admin/newsletter"><i className="la la-ticket" /> <span>Newsletter</span></Link>
              </li>
              <li>
                <Link to="/admin/user-list"><i className="la la-ticket" /> <span>User List</span></Link>
              </li>
    
                <li className="menu-title">
                <span>Employees</span>
              </li>
              
              <li className="submenu">
                <a onClick={showToggle} className="noti-dot"><i className="la la-user" /> <span> Employees</span> <span className="menu-arrow" /></a>
                {
                  show ? (<>
                   <ul style={{display: 'block'}}>
                   <li><a href="employees.html">All Employees</a></li>
                   <li><a href="holidays.html">Holidays</a></li>
                   <li><a href="leaves.html">Leaves (Admin) <span className="badge rounded-pill bg-primary float-end">1</span></a></li>
                 </ul>
                  </>) :
                  (<>
                  </>)
                }
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar