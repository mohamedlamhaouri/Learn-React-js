import React from 'react'

export default function Footer() {
  const today = new Date();
  return (
    <footer style={{backgroundColor:"red", color:"#fff", height:"50px"}}>
      <p>
        Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}