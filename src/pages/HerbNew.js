import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const HerbNew = ({ createHerb, currentUser }) => {
  const navigate = useNavigate();
  const [myHerb, setMyHerb] = useState({
    name: "",
    scientific_name: "",
    summary: "",
    benefit: "",
    warning: "",
    image: "",
    user_id: currentUser?.id
  });

  const handleChange = (e) => {
    setMyHerb({...myHerb, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    createHerb(myHerb);
    navigate("/myherbs");
  }; 

  return (
    <>
       {currentUser?.id && (
        <div className="form-container">
          <h1>Add to the Library</h1>
          <Form className="form">
            <FormGroup className="form-group-name">
              <Label for="name">Common Name: </Label>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={myHerb.name}
              />
            </FormGroup>
            <FormGroup className="form-group-sci-name">
              <Label for="scientific_name">Scientific or Strain Name: </Label>
              <Input
                type="text"
                name="scientific_name"
                onChange={handleChange}
                value={myHerb.sci_name}
              />
            </FormGroup>
            <FormGroup className="form-group-summary">
              <Label for="summary">Short Summary of Plant: </Label>
              <Input
                type="text"
                name="summary"
                onChange={handleChange}
                value={myHerb.summary}
              />
            </FormGroup>
            <FormGroup className="form-group-benefit">
              <Label for="benefit">What are the benefits?: </Label>
              <Input
                type="text"
                name="benefit"
                onChange={handleChange}
                value={myHerb.benefit}
              />
            </FormGroup>
            <FormGroup className="form-group-warning">
              <Label for="warning">Are there any major warnings?: </Label>
              <Input
                type="text"
                name="warning"
                onChange={handleChange}
                value={myHerb.warning}
              />
            </FormGroup>
            <FormGroup className="form-group-image">
              <Label for="form-image">Image URL: </Label>
              <Input
                type="text"
                name="image"
                onChange={handleChange}
                value={myHerb.image}
              />
            </FormGroup>
            <div className="submit">
              <Button onClick={handleSubmit} className="new-button">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      )}
    </>
  )
} 

export default HerbNew