import React, { useState, useEffect } from 'react'

const CurrentTimeComponent = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [clickCount, setClickCount] = useState(0)
  const [renderCount, setRenderCount] = useState(0)

  useEffect(() => {
    setRenderCount(renderCount + 1)
  }, [currentTime])

  const handleShowCurrentTime = () => {
    setCurrentTime(new Date().toLocaleTimeString())
    setClickCount(clickCount + 1)
  }

  return (
    <div>
      <h2>Current Time Component</h2>
      <p>
        <button onClick={handleShowCurrentTime}>Show Current Time</button>
      </p>
      {currentTime && <p>Current Time: {currentTime}</p>}
      <p>Button Clicks: {clickCount}</p>
      <p>Component Renders: {renderCount}</p>
    </div>
  )
}

export default CurrentTimeComponent
