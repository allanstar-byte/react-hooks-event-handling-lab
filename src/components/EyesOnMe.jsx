// Code EyesOnMe Component Here
import React from 'react'

// function EyesOnMe() {

// }

function EyesOnMe() {
  function handleFocus(e) {
    e.preventDefault();
    console.log('Good !');
  }
  return(
    <button onFocus={handleFocus}>Eyes On Me</button>
  )
}

export default EyesOnMe
