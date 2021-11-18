import React from "react";

export class Form extends React.Component<any, any> {

    state = {
        firstName: '',
        email: '',
        password: ''
    }

    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert('Некорректная длина имени')
        }
    }

    validateEmail = () => {
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(this.state.email)) {
            alert('Некорректный email')
        }
    }

    validatePassword = () => {
        if (this.state.password.length < 3 || this.state.password.length > 6) {
            alert('Допустимая длина пароля от 4 до 6 символов')
        }
    }

    handleChange = (event: { target: { name: any; value: any; }; }) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {firstName, email, password} = this.state;
        return (
            <div>
                <input
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                    onBlur={this.validateName}
                />
                <input
                    type="emil"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={this.handleChange}
                    onBlur={this.validatePassword}
                />
            </div>
        )
    }
}
