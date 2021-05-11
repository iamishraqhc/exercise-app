import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ExerciseTracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <link to="/" className="nav-link">Exercises</link>
                        </li>
                        <li className="navbar-item">
                            <link to="/create" className="nav-link">Create Exercise Log</link>
                        </li>
                        <li className="navbar-item">
                            <link to="/user" className="nav-link">Create User</link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}