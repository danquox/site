import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/App.css';

import Lanyard from './components/Lanyard';
import Snow from "../pages/components/Snow";

const snowContainer = ReactDOM.createRoot(document.getElementById("snow-container") as HTMLElement);

let value = 0;
const settingsView = () => {
  if (value === 0) {
    snowContainer.render(<></>)
    value = 1
  } else if (value === 1) {
    snowContainer.render(<><Snow /></>)
    value = 2
  } else {
    snowContainer.render(<><Snow /><Snow /><Snow /><Snow /></>)
    value = 0
  }
}

const App = () => {
  return (
    <React.StrictMode>
      <div className='__App'>
        <div className='header'>
          <img id='profile-button' onClick={settingsView} style={{opacity: 0}} src="https://www.iconspng.com/images/transparent-background-pattern/transparent-background-pattern.jpg" alt="" />
          <div id='hello' style={{display: "none"}}>hello</div>
          <Lanyard />
        </div>
        <div className='about-me'>
          <p>About Me</p>
          <p>just a dude that acts like he knows how to code. i like cats. that's all.</p>
          <div className='socials-container'>
            <a className='social-button' href="https://github.com/danquox" target="_blank">
              <img src="https://img.icons8.com/sf-regular-filled/512/github.png" alt="" />
            </a>
            <a className='social-button' href="https://twitter.com/_danquo" target="_blank">
              <img src="https://img.icons8.com/sf-regular-filled/512/twitter.png" style={{height: "90%", margin: "5%"}} alt="" />
            </a>
            <a className='social-button' href="https://open.spotify.com/user/e5xari4q28t7lwxla8rggf832?si=e9173c5d38b342f2" target="_blank">
              <img src="https://img.icons8.com/ios-glyphs/512/spotify.png" style={{height: "90%", margin: "5%"}} alt="" />
            </a>
            <a className='social-button' href="https://discord.com/users/170987556765171714" target="_blank">
              <img src="https://img.icons8.com/sf-black-filled/512/discord.png" style={{height: "90%", margin: "5%"}} alt="" />
            </a>
          </div>
        </div>
        <div className='projects'>
          <p>i have no fucking projects</p>
        </div>
      </div>
      <span className='footer'>
        <p>made by danquo</p>
      </span>
    </React.StrictMode>
  );
}

export default App;
