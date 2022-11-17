import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { validEmail, validUsername } from "../Rules/RegEx";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [usernameErr, setUsernameErr] = useState(false);
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validUsername.test(username)) {
      setUsernameErr(true);
    }
  };

  return (
    <div>
      <Form className="form-edit">
        <h3
          className="h5-edit"
          style={{ marginLeft: "150px", marginTop: "40px" }}
        >
          Create a New Account
        </h3>
        <FormGroup className="formgroup-edit">
          <Row>
            <Col>
              <Label className="label-edit">Username : </Label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  backgroundColor: "transparent",
                  borderColor: usernameErr ? "red" : "#1f4037",
                  width: "300px",
                  marginLeft: "155px",
                  marginTop: "25px",
                  borderWidth: "2px",
                }}

                placeholder="Enter your Username"
              />
              {usernameErr && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "160px",
                    marginBottom: "-20px",
                    fontSize:"15px"
                  }}
                >
                  Your Username is invalid
                </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Label className="label-edit">E-mail : </Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "transparent",
                  borderColor: emailErr ? "red" : "#1f4037",
                  width: "300px",
                  marginLeft: "155px",
                  marginTop: "25px",
                  borderWidth: "2px",
                }}
                placeholder="Enter your E-mail"
              />
              {emailErr && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "160px",
                    marginBottom: "-20px",
                    fontSize:"15px"
                  }}
                >
                  Your email is invalid
                </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Label className="label-edit">Password : </Label>
              <Input
                type="password"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#1f4037",
                  width: "300px",
                  marginLeft: "155px",
                  marginTop: "25px",
                  borderWidth: "2px",
                }}
                placeholder="Enter your Password"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                style={{
                  borderColor: "#1f4037",
                  marginLeft: "29px",
                  marginTop: "30px",
                  borderWidth: "2px",
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
          <Button
            onClick={validate}
            className="form-button"
            style={{
              width: "250px",
              height:"50px",
              marginLeft: "140px",
              backgroundColor: "#1f6038",
              color: "#fafafa",
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
