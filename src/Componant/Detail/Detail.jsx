import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import background from './Detail.module.css'
export default function Detail() {
  
  const [itemDetails, setItemDetails]=useState({});
  let params = useParams(); 
  
  let getItemDetails=async()=>{
    let {data}=await axios.get(`https://eng.caterieng.com/api/diseases/show/${params.id}`);
    setItemDetails(data.data)
    console.log(data)
  }

  useEffect(() =>{
    getItemDetails();
  },[])

  return (
    <>
    <div className={`${background.style}`}>
      <div className={`container text-light `}>
        <div className='row'>
          <h2 className='text-center my-5 text-info'>{itemDetails.name}</h2>

          <div className='row'>
            <div className='col-md-3'>
              <img src={itemDetails.img} className='w-100 h-100'/>
            </div>
            <div className='col-md-9'>
              <p className='fs-3 mb-4 text-end '>{itemDetails.intro}</p>
            </div>
          </div>

          <div className='text-end'>
            <div className='item'>
              <div className='fs-2 my-3 text-info fw-bolder'> الأسباب</div>
              <p className='fs-4'>{itemDetails.reasons}</p>
            </div>
          </div>

          <div className='text-end'>
            <div className='item'>
              <div className='fs-2 my-3 text-info fw-bolder'>الأعراض</div>
              <p className='fs-4'>{itemDetails.symptoms}</p>
            </div>
          </div>

          <div className='text-end'>
            {itemDetails.protection?<div className='item'>
              <div className='fs-2 my-3 text-info fw-bolder'>الوقاية</div>
              <p className='fs-4'>{itemDetails.protection}</p>
              </div>
              :<p className='fs-4'>{itemDetails.protection}</p>}
          </div>

          <div className='text-end'>
            <div className='item'>
              <div className='fs-2 my-3 text-info fw-bolder'>العلاج</div>
              <p className='fs-4'>{itemDetails.treatment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
