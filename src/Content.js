import React from 'react'

export default function Content() {
  const handleName = () =>{
    const names = ["mohamed", "lamhaouri","simo"];
    const n = Math.floor(Math.random()*3);
    return names[n];
  }
  return (
    <main>
      <p>Hello, {handleName()}</p>
    </main>
  )
}
