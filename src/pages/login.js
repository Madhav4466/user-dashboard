import { Button, TextField } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Login extends React.Component
{
    render()
    {
        return(
            <main id="main">
                <Container className="mt-5">
                    <Row lg={12}>
                        <Col lg="6">
                            <img src="../media/Login.png" alt="img"/>
                        </Col>
                        <Col lg={6}>
                        <form>
                            <h1>Login</h1>
                            <p>All fields are mandatory</p>
                            <label>User Name <i aria-hidden="true">*</i>
                                <TextField required id="outlined-basic" label="UserName" variant="outlined" focused/>
                            </label>
                            <label>User Name <i aria-hidden="true">*</i>
                                <TextField required id="outlined-basic" label="Password" variant="outlined" focused/>
                            </label>
                            <Button variant="contained">Contained</Button>
                        </form>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}