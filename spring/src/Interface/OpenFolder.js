import React from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
export default function OpenFolder() {
  const {id}=useParams()
  const [data,setdata]=useState([])

  useEffect(()=>{
      axios
      .get(`http://localhost:8080/api/${id}`)
      .then(res=>{
          setdata(res.data)})
      .catch(err=>{
          console.log(err)
      })
  })
  return (
    <div>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Spring Boot Application </a>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Home </a>

                </div>

            </div>
            <Link className='btn btn-outline-light' to="/UploadFile/:id">upload File</Link>
            <Link className='btn btn-outline-light' to="/addFile">Add File</Link>
            </nav>
            
        </div>
              <table align='center'>
            <tr>
                <th>FolderName</th>
                <th>File Name</th> 
                
            </tr>
            {data.map(data=>
                <tr>
                    <td>
                    {data.id}
                    </td>
                    <td>
                    {data.fname}
                    </td>
                    <td>
                    <Link className='btn btn-primary mx-2' 
                    to={`/openFile/${data.id}`}
                    >open</Link>
                    <Link className='btn btn-primary mx-2'
                    to={`/editFile/${id}/${data.id}`}>Edit</Link>
                    <button className='btn btn-danger mx-2' to={`/delete/${data.id}`}>Delete</button>
                    </td>
                </tr>
            )} 
        </table>
        
    </div>
  )
}
