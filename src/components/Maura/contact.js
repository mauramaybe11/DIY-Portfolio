import React from 'react'
// import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
function Contact () {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>
            Thank you for visiting my portfolio! lets keep in Touch!
        </h1>
        <Button>
          <a href="https://www.linkedin.com/in/maura-webber/">Linked in</a>
        </Button>
        <br></br>
        <br></br>
        <Button>
          <a href="https://github.com/mauramaybe11">GitHub</a>
        </Button>
      </div>
    </>
  )
}
export default Contact
