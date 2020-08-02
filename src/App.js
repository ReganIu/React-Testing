import React from "react"
import ContactCard from "./ContactCard"

function App() {
  return (
    <div>
      <ContactCard name="bob" phone="416" email ="123@asdf.com"/>
      <ContactCard name="bobby" phone="567" email ="345@asdf.com"/>
      <ContactCard name="bobbie" phone="345" email ="456@asdf.com"/>
      <ContactCard name="boby" phone="234" email ="567@asdf.com"/>
    </div>
  )
}


export default App