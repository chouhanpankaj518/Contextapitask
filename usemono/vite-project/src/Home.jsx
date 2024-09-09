import {useState , useEffect} from 'react'

export default function Home() {
   let [radum, setradum]= useState(2)
   let [Display , setDisplay]=useState([])

   

   useEffect(()=>{
          let show =data.filter(data=>data.id <=radum)
          setDisplay(show)
   },[radum])
  
    let data = [
      {
        id:1,
        name:"pankaj",
        add:"khargone",
        age:22
      },
      {
        id:2,
        name:"arjun",
        add:"indore",
        age:23
      },
      {
        id:3,
        name:"raja",
        add:"bhopal",
        age:24
      },
      {
        id:4,
        name:"ritesh",
        add:'dhar',
        age:25
      },
      {
        id:5,
        name:"pankaj",
        add:"khargone",
        age:22
      },
      {
        id:6,
        name:"arjun",
        add:"indore",
        age:23
      },
      {
        id:7,
        name:"raja",
        add:"bhopal",
        age:24
      },
      {
        id:8,
        name:"ritesh",
        add:'dhar',
        age:25
      }
  
    ]
  return (
    <div>
          {
              Display.map((e,i)=>(
                <div key={i} className='container'>
                <p className='miniid'>{e.id}</p>
                <div className='mininame'>{e.name}</div>
                <div className='miniadd'>{e.add}</div>
                <div className='miniage'>{e.age}</div>
                </div>
              ))
            }
            <button onClick={()=>setradum(radum+2)}>add to card</button>
    </div>
  )
}
