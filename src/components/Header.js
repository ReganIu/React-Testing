import React from "react"

function Header() {

    const styles = {
        color: '#FF8C00', 
        backgroundColor: '#FF2D00',
        fontSize: 35
    }
    
    return (
        <header className="navbar">
        <h1> This is a website!</h1>
          <ul style={styles}>
            <li>Welcome to my website!</li>
            <li>Please checkout my projects:</li>
          </ul>

      </header>
    )
}


export default Header
