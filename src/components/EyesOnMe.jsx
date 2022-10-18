// Code EyesOnMe Component Here
import React from 'react'

// function EyesOnMe() {

// }

function EyesOnMe() {
  function handleSubmit(event) {
    event.preventDefault()
    console.log('Good!')
  }

  return <button onClick={handleSubmit}> Eyes on Me </button>
}

export default EyesOnMe
