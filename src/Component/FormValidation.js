import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const FormValidation = () => {
  return (
    <div className="allof">
        <Form className="login-line">
            <FormGroup row>
            <Col className="inside-edit">
            <Row>
              <Label className='label-edit'>Username: <Input
                className="name-input"
                style={{ width: "300px" }}
                type="text"
              /></Label>
              
            </Row>

            <Row>
              <Label >E-mail: 
              <Input
                className="name-input"
                style={{ width: "300px" }}
                type="email"
              />
              </Label>
              
            </Row>

            <Row>
              <Label>Phone Number:
              <Input
                className="name-input"
                style={{ width: "300px" }}
                type="number"
              />
              </Label>
            
            </Row>
          </Col>
            </FormGroup>
          
        </Form>
      </div>
  )
}

export default FormValidation