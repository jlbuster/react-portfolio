import React from "react";
import profile_pic from "../images/profile_pic.jpg"

function About(props) {
    return (

    <div className="uk-container">

        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                <img src={profile_pic} uk-cover/>
            </div>

            <div>
                <div className="uk-card-body">
                    <h3 className="">About Me</h3>
                    <p>Creative Freedom.
                        <br/>
                        <br/>
                        There are many things I love about coding, but the endless possibilities of what you can create definitively tops the list. I haven't been coding for that long, but with technology constantly evolving and newer, more innovative applications taking the place of lesser ones, I don't see it getting boring anytime soon.
                        <br/>
                        <br/>
                        Currently, I enjoy coding javascript applications, while using html and css to format and style them. So far, I'm comfortable using HTML, CSS, javascript, bootstrap, mySQL, Sequelize, Node.js, MongoDB, Mongoose, and Express.
                        <br/>
                        <br/>
                        “Find a job you enjoy doing, and you will never have to work a day in your life.”
                        - Mark Twain </p>
                </div>
            </div>

        </div>
        <div className="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
            <h3 className="uk-card-title">More About Me</h3>
            <p>If you would like to know more about me or would like to see some of my work please consider taking a look at more information below.</p>
            <button className="uk-button uk-button-primary social" id="githubButton" style={{margin: '10px'}}><a style={{color: 'black'}}href='https://github.com/jlbuster' alt="_blank">Github</a></button>
            <button className="uk-button uk-button-primary social" id="linkedInButton" style={{margin: '10px'}}><a style={{color: 'black'}}href='https://ca.linkedin.com/in/john-blume-299b54190?trk=people-guest_people_search-card' alt="_blank">LinkedIn</a></button>
            <button className="uk-button uk-button-primary social" id="resumeButton"style={{margin: '10px'}}><a style={{color: 'black'}}href="" alt="_blank">Resume</a></button>
            <br/>
            <p>If you would like to get in contact with me please email me at <strong>johnblume5@gmail.com</strong> or call me at <strong>613-296-7885</strong>.
            </p>
        
        </div>

    </div>
    );
  }

  export default About