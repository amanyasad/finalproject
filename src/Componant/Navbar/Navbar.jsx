import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';

export default class Navbar extends Component {
    render() {
    return (
        <>
        <nav className={`${styles.test} py-4 navbar navbar-expand-lg bg-body-tertiary `}>
            <div className={`container `}>
                <h1 className={`navbar-brand fs-3` }>Skin Diseases Detection</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={` navbar-nav ms-auto mb-2 mb-lg-0 `}>
                        <li className="nav-item me-2">
                            <Link className="nav-link active fw-bold fs-5"aria-current="page" to="">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link fw-bold fs-5" to="about">Articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5" to="scan">Scan</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
    }
}
