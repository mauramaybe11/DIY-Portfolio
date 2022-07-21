
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
function Contact () {
  const [showhire, setShowHire] = useState(false)
  const handleCloseHire = () => setShowHire(false)
  const handleShowHire = () => setShowHire(true)
  return (
    <>
      <div className='contact-page' style={{ textAlign: 'center' }}>
        <br></br>
        <Button className='modal-home-button-contact' onClick={handleShowHire}>Lets Keep in Touch</Button>
        <Modal show={showhire} onHide={handleCloseHire}>
          <Modal.Header className='modal-home' closeButton>
            <Modal.Title className='modal-home-header'>Thank you for visiting my portfolio! lets keep in Touch!</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-home'>
            <h1 className="contact">Thank you for visiting my portfolio! Lets keep in Touch!</h1>
            <Button className='contactz'><a href="https://www.linkedin.com/in/maura-webber/">LinkedIn</a>
            </Button>
            <br></br>
            <Button className='contactz'><a href="https://github.com/mauramaybe11">GitHub</a>
            </Button>
          </Modal.Body>
          <Modal.Footer className='modal-home'>
            <Button variant='secondary' onClick={handleCloseHire}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}
export default Contact
