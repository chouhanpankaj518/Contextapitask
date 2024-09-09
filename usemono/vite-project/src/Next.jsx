import React from 'react'

export default function Next({next}) {
  return (
    <div>
              {
              next.map((e,i)=>(
                <div key={i} className='container'>
                <p className='miniid'>{e.id}</p>
                <div className='mininame'>{e.name}</div>
                <div className='miniadd'>{e.add}</div>
                <div className='miniage'>{e.age}</div>
               
                </div>
              ))
      }
    </div>
  )
}
