import React from 'react'

export default function Header() {
  const headerstyle = {backgroundColor:'red',  height:'60px',display:"flex"}
  return (
    <>
    <div style={headerstyle}>
        <h2 style={{ color:'#fff',margin:"auto",textAlign:"center", justifyContent:"center"}}>
            Navigation List
        </h2>
    </div>
      
    </>
  )
}