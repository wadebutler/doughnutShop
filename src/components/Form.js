import React, {Component} from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            email: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <form action="">
                <label htmlFor="">
                    Name:
                    <input
                    name="firstName"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="">
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </label>
            </form>
        )
    }
}

export default Form;