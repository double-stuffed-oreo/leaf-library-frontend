import React from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom"

const HerbProtectedIndex = ({ herbs, currentUser, deleteHerb }) => {
  const myHerbs = herbs?.filter(herb => herb.user_id === currentUser.id)

  return (
    <div className='herbs-body'>
      <h1>My Herbs</h1>
        <NavLink to="/herbnew" className="nav-link">Add a New Herb</NavLink>
      <div className='flex-herbs'>
          {myHerbs?.map((herb, index) => {
            return(
                <Card key={index} className='herb-cards'>
                  <CardTitle>
                  <b>{herb.name}</b>
                </CardTitle>
                  <CardImg top width="100%" src={herb.image} alt="" className="herb-picture"/>
                  <CardBody>
                    <div className="herb-text">
                      <CardSubtitle>
                        {herb.scientific_name}
                      </CardSubtitle>
                      <CardSubtitle>
                        Summary: {herb.summary}
                      </CardSubtitle>  
                    </div>
                    <NavLink to={`/herbshow/${herb.id}`} className="nav-link">
                      <Button className='herb-button'>More Details</Button>
                    </NavLink>
                    <NavLink to={`/herbedit/${herb.id}`}>
                      <Button className='herb-button'>Edit Herb</Button>
                    </NavLink>
                    <Button onClick={() => deleteHerb(herb.id)} className='herb-button'>Delete Herb</Button>
                  </CardBody>
                </Card>
            )
          })}
        </div>
    </div>
  )
}

export default HerbProtectedIndex