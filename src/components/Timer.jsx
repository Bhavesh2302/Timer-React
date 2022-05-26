import React, { useState } from 'react'
import { useEffect } from 'react'

const Timer = ({initial,end,timeinterval}) => {
const [timer,setTimer]=useState(initial)


useEffect(()=>{

    let id=setInterval(()=>{
if(timer>=end){
  
clearInterval(id)
setTimer(initial)

}
   else{    
        setTimer(timer+1)
   }

    },timeinterval)





return () => {
        clearInterval(id)
      
}
},[timer])




  return (
    <div>

        <h1>Timer</h1>
<h1>{timer}</h1>
      
    </div>
  )
}

export default Timer