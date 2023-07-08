import React from 'react'
import Home from '../Home/Home';
import About from '../About/About'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MasterPage from '../MasterPage/MasterPage';
import Scan from '../Scan/Scan';
import Detail from '../Detail/Detail';

export default function App() {

  let routes= createBrowserRouter([
    {path:'/', element:<MasterPage/>, children:[
      {index:true, element:<Home/>},
      {path:'about',element:<About/>},
      {path:'scan', element:<Scan/>},
      {path:'details/:id', element:<Detail/>},
    ]}
  ])
    
    return (
    <>
        <RouterProvider router={routes}/>
    
    </> 
    )
  }



  

