import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';

class register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/register', this.state)
        .then(result => {
            console.log('success');
        })
        .catch(err => {
            console.error(err);
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="layout">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="email">EMAIL:
                            <input 
                                type="text" 
                                name="email" 
                                className="form-control" 
                                placeholder="E-mail Address"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label for="username">USERNAME:
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label for="password">PASSWORD:
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label for="passwordMatch">RE-ENTER PASSWORD:
                            <input
                                type="password"
                                name="passwordMatch"
                                className="form-control"
                                placeholder="Re-Enter Password"
                            />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default register;
