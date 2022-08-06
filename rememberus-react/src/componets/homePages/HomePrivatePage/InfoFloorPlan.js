import React from "react";
import './InfoFloorPlan.css';

const InfoFloorPlan = (props) =>{
    return(
        <div>
            <h2 className="sectiontext">Street: {props.street}</h2>
            <h2 className="sectiontext">Floor: {props.floor}</h2>
            <h2 className="sectiontext">Number of rooms: {props.numberOfRooms}</h2>
        </div>
    )
}

export default InfoFloorPlan;