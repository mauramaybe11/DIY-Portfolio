import React from 'react'
function Project () {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div className='projects'>
          <br></br>
          <h2>MemeCentral</h2>
          <p>For this team project, we created a Meme Sharing application using AWS. We utilized a MERN stack (MongoDB, Express, React.js, Node.js) to build a full stack application that allows users to view and share memes.  We implemented user authentication and  authorization routes.  As a team we utilized GitHub to collaborate and styled the application with React Bootstrap.</p>
          <img className='slug' src='https://i.imgur.com/sItCQ10.png' />
          <br></br>
          <a href="https://breakout-room-5.github.io/img-client/">Link Meme Central</a>
          <br></br>
          <a href="https://github.com/mauramaybe11/img-client">Front End GitHub Repository</a>
          <br></br>
          <a href="https://github.com/mauramaybe11/img-api">Back End GitHub Repository</a>
        </div>
        <div className='projects'>
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
        <div className='projects'>
          <h2>Virtual Gallery</h2>
          <p>For this project Built a full-stack single page application  where users can sign up for an account and share their artwork in a virtual gallery. I implemented route testing with Postman and curl-scripts. I deployed front end on GitHub pages and deployed the server with Heroku.</p>
          <img className='slug' src='https://i.imgur.com/qd9R1wt.png' />
          <br></br>
          <a href="https://mauramaybe11.github.io/gallery-project/">Link to Virtual Gallery</a>
          <br></br>
          <a href="https://github.com/mauramaybe11/gallery-project">Front End GitHub Repository</a>
          <br></br>
          <a href="hhttps://github.com/mauramaybe11/gallery-project-server">Back End GitHub Repository</a>
        </div>
      </div>
    </>
  )
}
export default Project
