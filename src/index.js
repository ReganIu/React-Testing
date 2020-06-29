import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo () {
  return (
      <div>
        <h1> My name is Regan! </h1>
        <p> I like to code.</p>
        <ul>
          <li>1. Mexico</li>
          <li>2. Hawaii</li>
          <li>3. Japan</li>
        </ul>
      </div>
    )
}

ReactDOM.render(<MyInfo/>, document.getElementById('root'))