import React, { useState ,useEffect} from 'react';
import Header from './Header'
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const AddNewsLetter = () => {
    // Get Category
    const [categories,setCategories] = useState([]);
    const showCategory = async() =>{
       try{
          const {data} = await axios.get("http://localhost:8080/api/category");
          if(data.success){
            setCategories(data.category)
         }  
       }catch(e){
        console.log(e)
       }
    } 
  useEffect(()=>{
    showCategory()
  },[])

// Add NewsLetter
 const [category,setCategory] = useState("")
 const [title,setTitle] = useState("")
 const [badge,setBadge] = useState("")
 const [description,setDesc]= useState("");
 const [image,setImage] = useState("");
 const navigate = useNavigate()
 
 const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
        const newsData = new FormData()
        newsData.append("category",category)
        newsData.append("title",title)
        newsData.append("badge",badge)
        newsData.append("description",description)
        newsData.append("image",image)
        newsData.append("status","1")

       const {data} = await axios.post("http://localhost:8080/api/add-newsletter",newsData)

        if(data.success){
          navigate("/admin/newsletter");
         }
        else{
           alert("Could't not Added"); 
        }
    }catch(e){
        alert("Error in Code");
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
                                <h3 className="page-title">Newsletter</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/admin/home">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Newsletter</li>
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
                                <h4 className="card-title mb-0">Newsletter Form</h4>
                            </div>
                           
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                     <div className='col-md-6'>
                                        <div className="form-group">
                                            <label> Category:</label>
                                            <select className='form-control' required value={category} name='category' onChange={(e) =>setCategory(e.target.value)} >
                                                <option value="">-Select Value-</option>
                                            {
                                                categories.map((cat_data)=>(
                                                <option value={cat_data._id} key={cat_data.id}>{cat_data.name}</option>
                                                ))
                                            }    
                                                
                                            </select>
                                        </div>
                                     </div>
                                       <div className='col-md-6'>
                                           <div className="form-group">
                                            <label> Title Name:</label>
                                            <input type="text" name='title' value={title} onChange={(e) =>setTitle(e.target.value)} className="form-control" required />
                                          </div>
                                        </div>
                                        <div className='col-md-6'>
                                           <div className="form-group">
                                            <label>Badge:</label>
                                            <input type="text" name='badge' value={badge} onChange={(e)=>setBadge(e.target.value)} className="form-control" />
                                          </div>
                                        </div>
                                        <div className='col-md-6'>
                                           <div className="form-group">
                                            <label>Image:</label>
                                            <input type="file" name='image' accept='image/*' onChange ={(e) =>setImage(e.target.files[0])} className="form-control" />
                                             
                                          </div>
                                        </div>
                                        <div className='col-md-6'>
                                           <div className="form-group">
                                            <label>Description:</label>
                                            <textarea type="text" name='description' value={description} onChange={(e) =>setDesc(e.target.value)} className="form-control"></textarea>
                                          </div>
                                        </div>
                                     </div>
                                     <div className="text">
                                        <button type="submit" className="btn btn-primary btn-rounded">Submit</button>
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

export default AddNewsLetter