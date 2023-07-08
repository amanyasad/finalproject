import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from './About.module.css'

export default function About() {

  let[news,setNews]=useState([]);

  let getNews=async()=>{
    let {data}= await axios.get('https://eng.caterieng.com/api/diseases'); 
    setNews(data.data);
  }

  useEffect(()=>{
    getNews(); 
  },[])
  
  return (
      <>
      <div className='container mt-5'>
        {news.length>0?<div className='row gy-4'>
        {
          news.map((newItem,index)=>(
          <div key={index} className='col-md-4'>
            <Link className='nav-link' to={`/details/${newItem.id}`}>
              <div className='new'>
                <img src={newItem.img} className={`w-100 ${style.img}`}/>
                <h3>{newItem.name}</h3>
              </div>
            </Link>
          </div>
      )
      )
    }
          </div>:
            <div className='d-flex justify-content-center align-item-center'>
            <i className='fa fa-spinner fa-spin fa-5x'></i>
          </div>
        }
        </div>
      </>
    )
}


