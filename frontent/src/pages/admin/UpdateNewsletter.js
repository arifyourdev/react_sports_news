import React, { useState ,useEffect} from 'react';
import Header from './Header'
import Sidebar from './Sidebar';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
const UpdateNewsletter = () => {
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


// Update NewsLetter
 const [category,setCategory] = useState("")
 const [title,setTitle] = useState("")
 const [badge,setBadge] = useState("")
 const [description,setDesc]= useState("");
 const [image,setImage] = useState("");
 const navigate = useNavigate();
 const [id,setId] = useState("");

 //Get Single Newsletter
 
const params = useParams();

const getSingleNewsletter = async () =>{
    try{
    const {data} = await axios.get(`http://localhost:8080/api/single-newsletter/${params.slug}`);
    if(data){
        setTitle(data.newsletter.title);
        setBadge(data.newsletter.badge);
        setDesc(data.newsletter.description);
        setId(data.newsletter._id);
        setCategory(data.newsletter.category._id)
        
    }
    }catch(e){
        console.log(e)
    }
}

useEffect(() =>{
    getSingleNewsletter()
},[])
 
 const handleUpdate = async (e) =>{
    e.preventDefault()
    try{
        const newsData = new FormData()
        newsData.append("category",category)
        newsData.append("title",title)
        newsData.append("badge",badge)
        newsData.append("description",description)
        image && newsData.append("image",image)
        newsData.append("status","1")

       const {data} = await axios.put(`http://localhost:8080/api/update-newsletter/${id}`,newsData)

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
                                <h3 className="page-title">Update Newsletter</h3>
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
                                <h4 className="card-title mb-0">Edit Newsletter Form</h4>
                            </div>
                           
                            <div className="card-body">
                                <form onSubmit={handleUpdate}>
                                    <div className='row'>
                                     <div className='col-md-6'>
                                        <div className="form-group">
                                            <label> Category:</label>
                                            <select className='form-control' required name='category' value={category}  onChange={(e) =>setCategory(e.target.value)} >
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
                                            <img src={`http://localhost:8080/api/newsletter-image/${id}`}  style={{width:"100px",height:"100px",marginTop:"4px",borderRadius:"100%"}} />
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

export default UpdateNewsletter