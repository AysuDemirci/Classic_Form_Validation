import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

function FormValidation() {
  return (
    <div>
      <Form className="form-edit">
        <h5 style={{ marginLeft: "160px", marginTop: "40px" }}>
          Create a New Account
        </h5>
        <FormGroup className="formgroup-edit">
          <Row>
            <Col>
              <Label className="label-edit">Username:</Label>
              <Input
                type="text"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#A4826D",
                  width: "300px",
                  marginLeft: "155px",
                  marginTop: "25px",
                  borderWidth:"2px",
                }}
                className="ınput-edit"
                placeholder="Enter your Username"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Label className="label-edit">E-mail:</Label>
              <Input
                type="email"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#A4826D",
                  width: "300px",
                  marginLeft: "155px",
                  marginTop: "25px",
                  borderWidth:"2px",
                }}
                className="ınput-edit"
                placeholder="Enter your E-mail"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Label className="label-edit">Password:</Label>
              <Input
                type="password"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#A4826D",
                  width: "300px",
                  marginLeft: "155px",
                  marginTop: "25px",
                  borderWidth:"2px"
                }}
                className="ınput-edit"
                placeholder="Enter your Password"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#A4826D",
                  marginLeft: "29px",
                  marginTop: "30px",
                  borderWidth:"2px",
                }}
                type="checkbox"
              />
              <Label style={{ marginLeft: "15px", marginTop: "25px" }}>
                I confirm my information
              </Label>
            </Col>
          </Row>
        </FormGroup>
        <Row>
          <Button className="form-button"
            style={{
              width: "200px",
              marginLeft: "150px",
              backgroundColor: "#031A3D",
              color:"#A4826D"
              
            }}
          >
            Create Account
          </Button>
        </Row>
      </Form>
    </div>
  );
}

export default FormValidation;
