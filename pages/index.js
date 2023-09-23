import React from 'react'
import WalletConnect from '../components/WalletConnect'
import CurrentTimeComponent from '../components/CurrentTimeComponent'
import MousePositionBackground from '../components/MousePositionBackground'

const Home = () => {
  return (
    <div>
      <h1>Wallet Connection Example</h1>
      <WalletConnect />
      <CurrentTimeComponent />
      <MousePositionBackground />
    </div>
  )
}

export default Home
