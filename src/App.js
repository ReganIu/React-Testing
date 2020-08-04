import React from "react"
import Joke from "./Joke"

function App() {
  const num = [1,2,3,4,5,6,7,8]
  const newNum = num.map(function(num) {
    return num * 2 
  })

  return (
    <div>
      <Joke punchline = "haha" />
      <Joke question = "hello" punchline="asdfasdf" />
      <Joke question = "hello" punchline="asdfasdf" />
      <Joke question = "hello" punchline="asdfasdf" />
      <Joke question = "hello" punchline="asdfasdf" />
      <Joke question = "hello" punchline="asdfasdf" />  
    </div>
  )
}


export default App