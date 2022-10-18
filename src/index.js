import React from 'react'
import ReactDOM from 'react-dom'

import Keypad from './components/Keypad'
import EyesOnMe from './components/EyesOnMe'

import MultiButton from './components/Keypad'

// ReactDOM.render(
//     // <
//     //   div >
//     //   <
//     //   Keypad / >
//     //   <
//     //   EyesOnMe / >
//     //   <
//     //   /div>,
//     MultiButton,
//     document.getElementById('root')
// );

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('root'),
)
