import React from 'react'

import { createContext, useState, useEffect } from 'react'
import {BrowserRouter , Routes , Route ,Link} from "react-router-dom"
export  let Global=createContext()
import UseContact from './componets/UseContact'
import First from './page/First'
import Second from './page/Second'

export default function App() {

  let [show,setshow]=useState([])

  let [display,setdisplay]=useState([])

  let [gap,setgap]=useState(6)
    

  useEffect(()=>{
    setInterval(() => {
      async function getdata() {
        let datashow=await fetch(" https://jsonplaceholder.typicode.com/posts")
        datashow =await datashow.json()
        console.log(datashow)
        setshow(datashow)
      }
      getdata()
    }, 5000);

  },[])

  useEffect(()=>{
       let filterdata = show.filter(item=>item.id <= gap)
       setdisplay(filterdata)
  },[gap,show])

  return (
    <div>
      
      <Global.Provider value={{ display, setgap, gap, setdisplay }}>
        <BrowserRouter>
        
          
          <Routes>
            <Route path='/' element={<UseContact />} />
            <Route path='/First' element={<First display={display} />} />
            <Route path='/Second' element={<Second display={display}/>} />
          </Routes>
          <nav>
            <Link to="/" >1</Link>
            <Link to="/First" onClick={()=>setgap(gap+6)}>2</Link>
            <Link to="/Second" onClick={()=>setgap(gap+6)}>3</Link>
          </nav>
        </BrowserRouter>
      </Global.Provider>

    </div>
  )
}