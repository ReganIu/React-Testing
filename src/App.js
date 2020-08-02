import React from "react"
import ContactCard from "./ContactCard"

function App() {
  return (
    <div>
      <ContactCard contact= {{name:"bob", phone:"416", email :"123@asdf.com"}}/>
      <ContactCard contact={{name:"bobby", phone:"567", email :"345@asdf.com"}}/>
      <ContactCard contact={{name:"bobbie", phone:"345", email :"456@asdf.com"}}/>
      <ContactCard contact={{name:"boby", phone:"234", email :"567@asdf.com"}}/>
    </div>
  )
}


export default App