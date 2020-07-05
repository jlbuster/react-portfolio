import React from 'react';


function ProjectCard(props) {
    return (
        <div className="uk-container">
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                    <img src={props.image} alt="" uk-cover/>
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">{props.name}</h3>
                        <p></p>
                        <hr className="uk-divider-icon"/>
                        <button className="uk-button uk-button-primary proButton1" onclick="" style={{margin:'10px'}}>{props.repository}</button>
                        <button className="uk-button uk-button-primary proButton2" onclick="" style={{margin:'10px'}}>{props.application}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard