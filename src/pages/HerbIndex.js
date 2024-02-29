import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const HerbIndex = ({ herbs }) => {
  return (
    <>
      <div className="herbs-body">
        <h1>Recent Listings</h1>
        <div className="flex-herbs">
          {herbs?.map((herb, index) => {
            return (
              <Card key={index} className="herb-cards">
                <CardTitle>
                  <b>{herb.name}</b>
                </CardTitle>
                <CardImg
                  src={herb.image}
                  alt=""
                  className="herb-picture"
                />
                <CardBody>
                  <div className="herb-text">
                    <CardSubtitle>
                      {herb.scientific_name}
                    </CardSubtitle>
                    <CardSubtitle>
                      Summary: {herb.summary}
                    </CardSubtitle>
                  </div>
                  <NavLink
                    to={`/herbshow/${herb.id}`}
                    className="nav-link"
                  >
                    <Button className="herb-button">More Details</Button>
                  </NavLink>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </>
    
  );
};

export default HerbIndex;

