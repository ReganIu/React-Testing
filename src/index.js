import React from 'react'
import ReactDOM from 'react-dom'

import MyInfo from "./MyInfo" //default file type is .js

//functional component below uses capital first letter
//component can only return 1 JSX element, can get around by wrapping 2 or more elements in a <div>

// function MyInfo () {
//   return (
//       <div>
//         <h1> My name is Regan! </h1>
//         <p> I like to code.</p>
//         <ul>
//           <li>1. Mexico</li>
//           <li>2. Hawaii</li>
//           <li>3. Japan</li>
//         </ul>
//       </div>
//     )
// }

//JSX
ReactDOM.render(<MyInfo/>, document.getElementById('root'))