import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.removeCandidate(props.id)} />
    </div>
    <div className="content">
      <ul>
        {/* <li>
          <strong>Name:</strong> {props.name}
        </li> */}
        {/* <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li> */}
      </ul>
    </div>
    {/* this is the event listener but its doing the wrong thing, needs to shuffle. */}
    
  </div>
);

export default Card;


