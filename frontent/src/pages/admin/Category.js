import { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal } from 'antd';
import 'antd/dist/reset.css';

const Category = () => {
    
    const [categories,setCategories] = useState([]);
    const navigate = useNavigate()
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

 //Update Category
      const [visible,setVisible] = useState(false)
      const [selected,setSelected] = useState(null)
      const [updatedname,setUpdatedName] = useState("")
   
     const handleUpdate = async(e) =>{
        e.preventDefault()
        try{

            const update = await axios.put(`http://localhost:8080/api/update-category/${selected._id}`,{name:updatedname})
            if(update.data.success){
                setSelected(null);
                setUpdatedName("");
                setVisible(false)
                showCategory()
             }

        }catch(e){
            console.log(e)
            alert("Error in Update")
        }
     }        

    //  Delete Category
    const handleDelete = async (cid) =>{
       try{
         let confirm = window.confirm('Are you Sure you want to delete this Category');
         if(!confirm) return;
          const delete_category = await axios.delete(`http://localhost:8080/api/delete-category/${cid}`)
          if(delete_category.data.success){
            showCategory()
            navigate('/admin/category')
          }
       }catch(e){
        alert("Error In Deleting Query")
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
                            <div className="col-md-10">
                                <h3 className="page-title">Category Table</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/admin/home">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Category Form</li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <Link to="/admin/add-category" className='btn btn-warning btn-rounded text-white'>Add Category</Link>
                            </div>
                        </div>
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
                                                <th>Sr.No</th>
                                                <th>Category Name</th>
                                                <th>Slug</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                            {categories.map((category_data,s)=> (
                                <tr key={category_data.id}>
                                        <td>{ s += 1 }</td> 
                                        <td>{category_data.name}</td>
                                        <td>{category_data.slug}</td>
                                        <td>
                                            <button className='btn btn-info text-white btn-sm btn-rounded mr-2' onClick={()=>{setVisible(true);setUpdatedName(category_data.name);setSelected(category_data)}}><i className='fa fa-edit'></i></button>
                                            <Link className='btn btn-danger text-white btn-sm btn-rounded' onClick={() =>{handleDelete(category_data._id)}}><i className='fa fa-trash'></i></Link>
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
         
      {/* Category Model    */}
      <Modal onCancel={() =>setVisible(false)} footer={null} visible={visible} >
            <div className="card-body">
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <label className='mb-3'>Category Name:</label>
                    <input type="text" name='name' value={updatedname} onChange={(e) =>setUpdatedName(e.target.value)}  className="form-control" required/>
                </div>
                    <div className="text">
                     <button type="submit" className="btn btn-primary btn-rounded">Update</button>
                   </div>
            </form>
        </div>
      </Modal>
     </>
  )
}

export default Category