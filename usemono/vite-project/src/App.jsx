import React, { useState } from 'react'

export default function App() {
let [data, setdata]= useState(false)
  let Quiz =[
      {
        Question:"what is html",
        Option:[
          {id:"hyper markup text language"},
          {id:"hyper markyu text language"},
          {id:"higer markup text language"},
          {id:"hyper text markup language"}
        ],
        correctanswer:"hyper text markup language"
      }
  ]
  
    function handlclick(){
      setdata(true)
    }

  return (
    <div>
      {
        Quiz.map((option,optionid)=>(
          <div key={optionid}>
            <p>Question:{option.Question}</p>
            {
              option.Option.map((e,i)=>(
                <div key={i}>
                  <input type='radio' name={optionid} />
                  {e.id}
                </div>
              ))
            }
          </div>
        ))
      }
      <p>{data}</p>
      <button onClick={()=>handlclick()}>submit</button>
      {data?{}:{}}
    </div>
  )
}
