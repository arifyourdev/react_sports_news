import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddCategory = () => {
    const [name,setName] = useState("");
    const navigate = useNavigate()

    const CategoryHandle = async (e)=>{
        e.preventDefault()
       try{
        
           const res = await axios.post("http://localhost:8080/api/add-category",{name})
         if(res.data.success){
            navigate("/admin/category");
          }else{
            alert("Error in Api")
          }
       }catch(e){
         console.log(e)
         document.getElementById("error").innerHTML = "Something Went Wrong"
       }
    }
  return (
     <>
         <div className='main-wrapper'>
            <Header/>
            <Sidebar/>

            <div className="page-wrapper">
              <div className="content container-fluid">
                 <div className="page-header">
                        <div className="row">
                            <div className="col">
                                <h3 className="page-title">Category</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/admin/home">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Category</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                           <div>
                                <h4 className='text-danger' id="error"></h4>
                            </div>
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Category Form</h4>
                            </div>
                           
                            <div className="card-body">
                                <form onSubmit={CategoryHandle}>
                                    <div className="form-group">
                                        <label>Category Name:</label>
                                        <input type="text" name='name' onChange={e=>(setName(e.target.value))} value={name} className="form-control" required/>
                                    </div>
                                     <div className="text">
                                        <button type="submit" className="btn btn-primary btn-lg btn-rounded">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
              </div>
            </div>
        </div>  
     </>
  )
}

export default AddCategory