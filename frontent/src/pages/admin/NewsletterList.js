import { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom'
import axios from 'axios';
const NewsletterList = () => {

    const[newsdata,setNewsletter] = useState([])
    const FethNewsletter = async() =>{
        try{
         const {data} = await axios.get("http://localhost:8080/api/newsletter");
         if(data.success){
            setNewsletter(data.newsletter)
            console.log(data.newsletter)
         }
        }catch(e){
            console.log(e)
            document.getElementById("error").innerHTML = "Error in Code";
        }
    }

    useEffect(()=>{
        FethNewsletter()
    },[])

    // Status Change
    const handleChange = () =>{
        
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
                            <div className="col-md-10">
                                <h3 className="page-title">Newsletter Table</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/admin/home">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Newsletter Form</li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <Link to="/admin/add-newsletter" className='btn btn-warning btn-rounded text-white'>Add Newsletter</Link>
                            </div>
                        </div>
                     </div>
                        <div>
                            <h3 id="error" className='text-danger'></h3>
                        </div>
                  <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Category Table</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Sr No</th>
                                                <th>Category</th>
                                                <th>Title</th>
                                                <th>Badge</th>
                                                <th>Description</th>
                                                <th>Image</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                             {newsdata?.map((n_data,s) =>(
                                
                                     <tr key={n_data.id}>
                                        <td>{ s += 1  }</td>
                                        <td>{n_data.category ? n_data.category.name : "" }</td>
                                        <td>{n_data.title}</td>
                                        <td>{n_data.badge}</td>
                                        <td>{n_data.description.substring(0,40)}...</td>
                                        <td><img src={`http://localhost:8080/api/newsletter-image/${n_data._id}`} alt={n_data.title} style={{width:"40px",height:"40px",borderRadius:"100%"}} /></td>
                                         <td>
                                            {n_data.status == 1 ? 
                                            (<><span class="badge bg-inverse-info" onClick={handleChange} style={{cursor:"pointer"}}>Active</span></>) :
                                            (<><span class="badge bg-inverse-danger">Deactive</span></>)
                                             }
                                        </td>
                                        <td>
                                            <Link className='btn btn-info text-white btn-sm btn-rounded mr-2'to={`/admin/edit-newsletter/${n_data.slug}`}><i className='fa fa-edit'></i></Link>
                                            <Link className='btn btn-danger text-white btn-sm btn-rounded'><i className='fa fa-trash'></i></Link>
                                        </td>
                                     </tr>
                                 ))}           
                                        
                                        </tbody>
                                    </table>
                                </div>
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

export default NewsletterList