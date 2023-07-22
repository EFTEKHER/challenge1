import React from 'react'

const Abutton = ({skills,color}) => {
  return (
    <div>
    <button style={{color:{color},width:"40px",fontSize:"12px" ,height:"20px" , display:"flex",justifyContent:"space-between" }} onClick={(e)=>{
      console.log(e.target.skills);
    }}>{skills} </button>
    </div>
  )
}

export default Abutton
