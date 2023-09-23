import React, { useState, useEffect } from 'react'
import Web3 from 'web3'

const WalletConnect = () => {
  const [address, setAddress] = useState('')
  const [maxConsecutiveCharacter, setMaxConsecutiveCharacter] = useState('')

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        // Metamask or similar
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })
          setAddress(accounts[0])
          findMaxConsecutiveCharacter(accounts[0])
        } catch (error) {
          console.error(error)
        }
      } else if (window.polkadot) {
        // Polkadot-JS or similar
        // Connect to Polkadot wallet and retrieve address
        // Remember to handle Polkadot-specific wallet interactions
      }
    }

    connectWallet()
  }, [])

  const findMaxConsecutiveCharacter = (address) => {
    if (!address) {
      setMaxConsecutiveCharacter('') // No address, so no consecutive character
      return
    }

    let maxCount = 0
    let currentChar = ''
    let currentCount = 1

    for (let i = 1; i < address.length; i++) {
      if (address[i] === address[i - 1]) {
        currentCount++
      } else {
        if (currentCount > maxCount) {
          maxCount = currentCount
          currentChar = address[i - 1]
        }
        currentCount = 1
      }
    }

    // Check if the last character sequence is the longest
    if (currentCount > maxCount) {
      maxCount = currentCount
      currentChar = address[address.length - 1]
    }

    setMaxConsecutiveCharacter(currentChar)
  }

  return (
    <div>
      <h2>Connected Wallet Address: {address}</h2>
      <h2>Max Consecutive Character: {maxConsecutiveCharacter}</h2>
    </div>
  )
}

export default WalletConnect
