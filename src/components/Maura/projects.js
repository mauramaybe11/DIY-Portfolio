import React from 'react'
function Project () {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>My Projects</h1>
        <div className='projects'>
          <h2>MemeCentral</h2>
          <p>For this project a team of other students and myself created a Meme Sharing application using AWS. We utilized a MERN stack (MongoDB, Express, React.js, Node.js) to build a full stack application that allows users to post memes and view others memes. We implemented user authentication and  authorization routes.Utilized GitHub to collaborate with other teammates.  We styled application using ReactBootstrap</p>
          <img className='slug' src='https://i.imgur.com/sItCQ10.png' />
          <br></br>
          <a href="https://breakout-room-5.github.io/img-client/">Link Meme Central</a>
          <br></br>
          <a href="https://github.com/mauramaybe11/img-client">Front End GitHub Repository</a>
          <br></br>
          <a href="https://github.com/mauramaybe11/img-api">Back End GitHub Repository</a>
          <div className='projects'>
            <h2>Trackle</h2>
            <p>I created a single page application using a React front end and Django backend.  Trackle is an app that a lets you log in and track your wordle word, the date that you guessed it and the number of guesses that it took you to guess it. You can see your guessing wordle average and view other users wordle word guesses. </p>
            <img className='slug' src='https://i.imgur.com/LvmPgMJ.png' />
            <br></br>
            <a href="https://mauramaybe11.github.io/gallery-project/">Link to Virtual Gallery</a>
            <br></br>
            <a href="https://github.com/mauramaybe11/trackle-client">Front End GitHub Repository</a>
            <br></br>
            <a href="https://github.com/mauramaybe11/trackle-back-end">Back End GitHub Repository</a>
          </div>
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
