import React from 'react';
import { Container} from 'react-bootstrap';

export default class Header extends React.Component
{
    render()
    {
        return(
            <header id="header">
                <nav className="navbar navbar-expand-lg bg-light fixed-top">
                    <Container fluid>
                        <a className="navbar-brand" href="#page">Company</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Company</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#page">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#page">How to use</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#page">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../pages/login.js">Login</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </Container>
                </nav>
            </header>
        );
    }
}