import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import './Stylesheet.css'
import {} from "react-router-dom"
import axios from "axios"
import SpringApp from './SpringApp'

 function View1() {
  
    const [data,setdata]=useState([])

    useEffect(()=>{
        axios
        .get('http://localhost:8080/api/folders')
        .then(res=>{
            setdata(res.data)})
        .catch(err=>{
            console.log(err)
        })
    })
    console.log(data);
    useEffect(()=>{
        loadUser();
    })
    const loadUser=async()=>{
        const results=await axios.get("http://localhost:8080/api/folders")
        setdata(results.data);
    }
    const deletefld=async(id)=>{ 
        await axios.delete(`http://localhost:8080/api/delete/${id}`)
        loadUser();
    }
  return (
    <div>
        <SpringApp/>
        <table align='center'>
            <thead>
            <tr>
                <th>Folder Symbol</th>
                <th>Folder Name</th> 
                
            </tr>
            </thead>
            <tbody>
            {data.map(data=>
                <tr>
                    <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                    </svg>
                    </td>
                    <td>
                    {data.folderName}
                    </td>
                    <td>
                    <Link className='btn btn-primary mx-2' 
                    to={`/open/${data.id}`}
                    >open</Link>
                    <Link className='btn btn-primary mx-2'
                    to={`/edit/${data.id}`}>Edit</Link>
                    <button className='btn btn-danger mx-2' onClick={()=>deletefld(data.id)}>Delete</button>
                    </td>
                </tr>
            )} 
            </tbody>
        </table>
        
    </div>
  )
}
export default View1;
