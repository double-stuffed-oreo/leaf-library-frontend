import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const HerbEdit = ({ currentUser, herbs, updateHerb }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const herb = herbs.find(
    (herb) => herb.id === parseInt(id)
  )

  const [herbFromData, setHerbFormData] = useState({
    name: herb?.name || "",
    scientific_name: herb?.scientific_name || "",
    summary: herb?.summary || "",
    benefit: herb?.benefit || "",
    warning: herb?.warning || "",
    bathrooms: herb?.bathrooms || "",
    image: herb?.image || "",
    user_id: currentUser?.id,
  })

  const handleChange = (e) => {
    setHerbFormData({ ...herbFromData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateHerb(herbFromData, herb.id)
    navigate("/myherbs")
  }

  return (
    <div className="new-body">
      <h1>Update An Herb</h1>
      <Form className="form">
        <FormGroup className="form-group">
          <Label for="name">Name</Label>
          <Input
            id="common name" 
            type="text"
            name="name"
            onChange={handleChange}
            value={herbFromData.name}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="scientific_name">Scientific Name (Optional)</Label>
          <Input
            id="scientific_name" 
            type="text"
            name="scientific_name"
            onChange={handleChange}
            value={herbFromData.scientific_name}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="summary">Summary</Label>
          <Input
            id="summary" 
            type="text"
            name="summary"
            onChange={handleChange}
            value={herbFromData.summary}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="benefit">Benefit</Label>
          <Input
            id="benefit" 
            type="text"
            name="benefit"
            onChange={handleChange}
            value={herbFromData.benefit}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="warning">Warning</Label>
          <Input
            id="warning"
            type="text"
            name="warning"
            onChange={handleChange}
            value={herbFromData.warning}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="image">Image URL</Label>
          <Input
            id="image"
            type="text"
            name="image"
            onChange={handleChange}
            value={herbFromData.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit} type="submit" className="new-button">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default HerbEdit