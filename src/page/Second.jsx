import React from 'react'
import './Second.css'
export default function Second({display}) {
  return (
    <div className='main'>
        {
            display.map((e,i)=>(
                <div key={i} className="contaier">
                  <p style={{fontSize:"30px"}} onClick={()=>removecard(e.id)} className='cancel'>x</p>
                 <img src="https://media.istockphoto.com/id/1164885370/photo/making-a-few-adjustments-to-the-code.jpg?s=2048x2048&w=is&k=20&c=k6G7gYYkkP_U9LbdOu4wK1VfsxLKZm7azMoZbvDJp8Y="/>
                <p className='p'>{e.body}</p>
                 <h4 className='h4'>{e.id}</h4>
                 <p className='pp'>{e.title}</p>
                 <h5 className='h5'>{e.userId}</h5>
                </div>
            ))
          }
    </div>
  )
}
