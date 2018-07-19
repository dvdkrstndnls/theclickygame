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
    <span onClick={() => props.removeCandidate(props.id)} className="remove">
      {/* x */}
    </span>
  </div>
);

export default Card;
