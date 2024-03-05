import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const HerbShow = ({ herbs, currentUser }) => {
  let { id } = useParams();
  const currentHerb = herbs?.find((herb) => herb.id === +id);
  const [showElement, setShowElement] = useState(true);
  const handleDelete = () => {
    setShowElement(false);
  };

  return (
    <>
      <div className="single-herb-container">
        <div className="herb-card"></div>
        <div className="herb-card-text">
          <b className="herb-scientific-name">
            {currentHerb?.scientific_name}{" "}
          </b>
          <img className="herb-image" src={currentHerb?.image} alt="herb-pic" />
          <h2 className="herb-common-name">{currentHerb?.name}</h2>
          <p className="herb-card-body">
            <br />
            <b className="card-sections"> Summary:</b> {currentHerb?.summary}
            <br />
            <b className="card-sections"> Benefit:</b> {currentHerb?.benefit}
            <br />
            <b className="card-sections"> Warning:</b> {currentHerb?.warning}
          </p>
        </div>
        <div className="delete-button">
          <Button onClick={handleDelete}>Delete</Button>
        </div>
        <NavLink to={`/herbindex`} className="herb-return-index">
          <Button className="herb-button">Back to Index</Button>
        </NavLink>
        {currentUser && (
          <NavLink to={`/herbedit/${currentHerb.id}`}>
          <Button className='herb-button'>Edit Herb</Button>
        </NavLink>
        )}
      </div>
    </>
  );
};

export default HerbShow;