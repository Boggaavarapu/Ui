import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function UploadFile() {
    let navigate=useNavigate();
    const [file,setFile]=useState({
        
        Personname:""
        
    })
    const {id}=useParams()
    const onFormSubmit=async(e,file)=>{
        e.preventDefault();
        await axios.post(`http://localhost/8080/${id}/${file.Personname}`,file)
        navigate("/");   
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'> Upload Folder</h2>
          <form  >
          <div className='mb-3'>
          <label htmlFor='NewFileName' className='form-label'>
              Person Name
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder='Enter Person Name'
            name="Personname"
            value={file.Personname}
            onChange={e=>setFile({...file,Personname:e.target.value})}
            />
            <label htmlFor='NewFolderName' className='form-label'
            value={file} 
            >
              Upload File
            </label>
            
            <input
            type={"file"}
            className="form-control"
            
            name="NewFolderName"
          
            /> 
            <br></br>
            <button type="submit" onClick={onFormSubmit(file)}className='btn btn-primary'>Submit</button>
            </div> 
          </form>
        
        </div>

      </div>
    </div>
  )
}
