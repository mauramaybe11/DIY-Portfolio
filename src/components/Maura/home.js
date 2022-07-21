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
          <Button className='modal-home-button' onClick={handleShowHire}>SKILLS</Button>
          <Modal show={showhire} onHide={handleCloseHire}>
            <Modal.Header className='modal-home' closeButton>
              <Modal.Title className='modal-home-header'>Skills</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-home'>JavaScript, React.js, JQuery, Python, HTML, MySQL, Heroku, PostgreSQL, Postman,  Express, Node.js, MongoDB, Mongoose, Git, GitHub, Teams, Slack, Django, CSS, SASS, Bootstrap, Styled-Components, Trello, Salesforce</Modal.Body>
            <Modal.Footer className='modal-home'>
              <Button variant='secondary' onClick={handleCloseHire}>Close</Button>
            </Modal.Footer>
          </Modal>
          <br></br>
          <br></br>
          <Button className='modal-home-button' onClick={handleShow}>BACKGROUND</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className='modal-home' closeButton>
              <Modal.Title className='modal-home-header'>Hi, I am Maura!</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-home'>I recently graduated from General Assembly&apos;s Software Engineering Immersive program. The majority of my work experience has been in higher education and I am looking forward to applying my strong communication skills to a career in tech. </Modal.Body>
            <Modal.Footer className='modal-home'>
              <Button variant='secondary' onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
          <br></br>
          <Button className='modal-home-button' onClick={handleShowContact}>PROJECTS</Button>
          <Modal show={showcontact} onHide={handleCloseContact}>
            <Modal.Header className='modal-home' closeButton>
              <Modal.Title className='modal-home-header'>Projects</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-home-project'><div style={{ textAlign: 'center' }}>
              <div>
                <h2>MemeCentral</h2>
                <p>For this team project, we created a Meme Sharing application using AWS. We utilized a MERN stack (MongoDB, Express, React.js, Node.js) to build a full stack application that allows users to view and share memes.  We implemented user authentication and  authorization routes.  As a team we utilized GitHub to collaborate and styled the application with React Bootstrap.</p>
                <img className='slug' src='https://i.imgur.com/sItCQ10.png' />
                <br></br>
                <a href="https://breakout-room-5.github.io/img-client/">Meme Central Link</a>
                <br></br>
                <a href="https://github.com/mauramaybe11/img-client">Front End GitHub Repository</a>
                <br></br>
                <a href="https://github.com/mauramaybe11/img-api">Back End GitHub Repository</a>
                <br></br>
                <br></br>
                <div>
                  <h2>Trackle</h2>
                  <p>I created a single page application using a React front end and Django backend.  Trackle is an app that lets the user log in and track their wordle words and scores. Users can see their guessing averages and view other users wordle scores. </p>
                  <img className='slug' src='https://i.imgur.com/LvmPgMJ.png' />
                  <br></br>
                  <a href="https://mauramaybe11.github.io/gallery-project/">Link to Virtual Gallery</a>
                  <br></br>
                  <a href="https://github.com/mauramaybe11/trackle-client">Front End GitHub Repository</a>
                  <br></br>
                  <a href="https://github.com/mauramaybe11/trackle-back-end">Back End GitHub Repository</a>
                </div>
              </div>
              <br></br>
              <div>
                <h2>Virtual Gallery</h2>
                <p>For this project I built a full-stack single page application  where users can sign up for an account and share their artwork in a virtual gallery. I implemented route testing with Postman and curl-scripts. I deployed the front end on GitHub pages and deployed the server with Heroku.</p>
                <img className='slug' src='https://i.imgur.com/qd9R1wt.png' />
                <br></br>
                <a href="https://mauramaybe11.github.io/gallery-project/">Link to Virtual Gallery</a>
                <br></br>
                <a href="https://github.com/mauramaybe11/gallery-project">Front End GitHub Repository</a>
                <br></br>
                <a href="hhttps://github.com/mauramaybe11/gallery-project-server">Back End GitHub Repository</a>
              </div>
            </div></Modal.Body>
            <Modal.Footer className='modal-home'>
              <Button variant='secondary' onClick={handleCloseContact}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <img className="slug" src="https://i.imgur.com/JBBL25M.png"/>
      </div>
      <br></br>
      <div style={{ textAlign: 'center' }}>
        <h1 className="contact">
            Thank you for visiting my portfolio! Lets keep in Touch!
        </h1>
        <Button>
          <a href="https://www.linkedin.com/in/maura-webber/">LinkedIn</a>
        </Button>
        <br></br>
        <br></br>
        <Button>
          <a href="https://github.com/mauramaybe11">GitHub</a>
        </Button>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  )
}
export default Home
