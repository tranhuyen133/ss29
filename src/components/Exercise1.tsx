import React from 'react'

export default function Exercise1() {
  const handleClick = () => {
    console.log('Clicked');
  };
  return (
    <div>
      <button onClick={handleClick} >Click Me</button>
    </div>
  )
}
