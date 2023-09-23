import React, { useState, useEffect } from 'react'

const MousePositionBackground = () => {
  const [bgColor, setBgColor] = useState('#00FF00') // Initial background color (green)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY

      // Calculate RGB values based on mouse position
      const r = Math.floor((x / window.innerWidth) * 255)
      const g = Math.floor((y / window.innerHeight) * 255)
      const b = 100 // You can adjust this value for the blue component

      // Set the background color based on the mouse position
      setBgColor(`rgb(${r},${g},${b})`)
    }

    // Add a mousemove event listener to the document
    document.addEventListener('mousemove', handleMouseMove)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      style={{
        width: '50vw',
        height: '5vh',
        backgroundColor: bgColor,
        transition: 'background-color 0.3s ease', // Add a smooth transition effect
      }}
    >
      <h1>Dynamic Background Color</h1>
      <p>Move your mouse to see the color change!</p>
    </div>
  )
}

export default MousePositionBackground
