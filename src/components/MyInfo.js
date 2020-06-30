import React from 'react' //need to import React to use JSX in the func below

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

  export default MyInfo //need to export the func so other files can access this component