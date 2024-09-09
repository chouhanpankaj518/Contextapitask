import React,{useContext} from 'react'
import  {Global}  from '../App'
import "./UseContsct.css"

export default function UseContact() {
  let {display,setgap ,gap , setdisplay} =useContext(Global) 

  
  function removecard(id){
    const newDisplay = display.filter(item => item.id !== id);
    setdisplay(newDisplay); 
  
 }
 if(display.length===0){
  return(
    <div>
      <h1>Loding</h1>
    </div>
  )
 }

  return (
    <div>
    
      <div className='main'>
        {
            display.map((e,i)=>(
                <div key={i} className='body'>
                  <p style={{fontSize:"30px"}} onClick={()=>removecard(e.id)} className='cancel'>x</p>
                 <img src="https://media.istockphoto.com/id/1164885370/photo/making-a-few-adjustments-to-the-code.jpg?s=2048x2048&w=is&k=20&c=k6G7gYYkkP_U9LbdOu4wK1VfsxLKZm7azMoZbvDJp8Y="/>
                <p className='p'>{e.body}</p>
                 <h4 className='h4'>{e.id}</h4>
                 <p className='pp'>{e.title}</p>
                 <h5 className='h5'>{e.userId}</h5>
                </div>
            ))
          }
          <button onClick={()=>setgap(gap+6)}>read more</button>
          <button onClick={()=>setgap(Math.max(0,gap-6))}>sub</button>
    </div>
    </div>
  )
}
