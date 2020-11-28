import React, { Component } from 'react';
const SpaceXProgramCard = (props) => {
    return (
        <div className="spacex-card">
            <div className="text-center">
                <img src={props.item.links.mission_patch_small} alt="spacex program image" />
            </div>
            <h3>{props.item.mission_name}</h3>
            <h4>Mission Ids:</h4>

            {props.item.mission_id.length > 0 &&
                <ul>
                    {props.item.mission_id.map((singleId, key) =>  <li key={key}>{singleId}</li> )}
                </ul>
            }
            <h4>Launch Year: <span>{props.item.launch_year}</span></h4>
            <h4>Successful Launch : <span>{props.item.launch_success? "true" : "false"}</span></h4>
            <h4>Successful Landing : <span>{props.item.land_success ? "true" : "false"}</span></h4>
        </div>
    )
}

export default SpaceXProgramCard;