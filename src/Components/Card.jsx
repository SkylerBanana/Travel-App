import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Card(props) {
  return (
    <div className="Card-container">
      <img className="Card-img" src={`../imgs/${props.img}`}></img>
      <div className="Card-text">
        <p className="Card-country">{props.country}</p>
        <a className="Card-link" href={props.maps}>
          view on google maps
        </a>
        <h3>
          <FaLocationDot className="Card-icon" />
          {props.location}
        </h3>
        <p className="Card-date">{props.date}</p>
        <p className="Card-info">{props.info}</p>
      </div>
    </div>
  );
}
