import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
function Home () {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [showhire, setShowHire] = useState(false)
  const handleCloseHire = () => setShowHire(false)
  const handleShowHire = () => setShowHire(true)
  const [showcontact, setContact] = useState(false)
  const handleCloseContact = () => setContact(false)
  const handleShowContact = () => setContact(true)
  return (
    <>
      <div className='home' style={{ textAlign: 'center' }}>
        <div className='slug-side'>
          <Button className='modal-home-button' onClick={handleShowHire}>Hire Me!</Button>
          <Modal show={showhire} onHide={handleCloseHire}>
            <Modal.Header className='modal-home' closeButton>
              <Modal.Title className='modal-home-header'>why!</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-home'>Some of my many skills are JavaScript, React.js, JQuery, Python 3.7, HTML, MySQL, Heroku, PostgreSQL, Postman,  Express, Node.js, MongoDB, Mongoose, Git, GitHub, Teams, Slack, django, CSS, SASS, Bootstrap, Styled-Components, Trello, Salesforce!</Modal.Body>
            <Modal.Footer className='modal-home'>
              <Button variant='secondary' onClick={handleCloseHire}>Close</Button>
            </Modal.Footer>
          </Modal>
          <br></br>
          <br></br>
          <Button className='modal-home-button' onClick={handleShow}>Who Am I!</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className='modal-home' closeButton>
              <Modal.Title className='modal-home-header'>Hi, I am Maura!</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-home'>I just finished General Assembly Software Engineering Immersive program and I excited to now be pursuing my future career in tech!</Modal.Body>
            <Modal.Footer className='modal-home'>
              <Button variant='secondary' onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
          <br></br>
          <Button className='modal-home-button' onClick={handleShowContact}>Who Am I!</Button>
          <Modal show={showcontact} onHide={handleCloseContact}>
            <Modal.Header className='modal-home' closeButton>
              <Modal.Title className='modal-home-header'>Hi, I am Maura!</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-home'>I just finished General Assembly Software Engineering Immersive program and I excited to now be pursuing my future career in tech!</Modal.Body>
            <Modal.Footer className='modal-home'>
              <Button variant='secondary' onClick={handleCloseContact}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <img className="slug" src="https://i.imgur.com/JBBL25M.png"/>
      </div>
    </>
  )
}
export default Home
