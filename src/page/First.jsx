import React from 'react'

export default function First({display}) {
  return (
    <div className='display: flex;'>
         {
            display.map((e,i)=>(
                <div key={i} className='body'>
                  <p style={{fontSize:"30px"}} onClick={()=>removecard(e.id)} className='cancel'>x</p>
                 <img src="https://media.istockphoto.com/id/1164885370/photo/making-a-few-adjustments-to-the-code.jpg?s=2048x2048&w=is&k=20&c=k6G7gYYkkP_U9LbdOu4wK1VfsxLKZm7azMoZbvDJp8Y="/>
                <p className='p'>{e.body}</p>
                 <h4 className='h4'>{e.id}</h4>
                 <p className='pp'>{e.title}</p>
                 <h5 className='Underline' >{e.userId}</h5>
                </div>
            ))
          }
    </div>
  )
}
