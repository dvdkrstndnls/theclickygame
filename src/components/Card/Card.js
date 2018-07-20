import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
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
    <span onClick={() => props.removeCandidate(props.id)} className="remove"> 
      {/* this is the thing to click but it needs to change to the whole card not just the X, then remove X*/}
      x
    </span>
  </div>
);

export default Card;


