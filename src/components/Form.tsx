import React from "react";

export class Form extends React.Component<any, any> {

    state = {
        firstName: '',
        email: '',
        password: '',
        message: '',
        select: '',
        subscription: false,
        gender: ''
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

    handleCheckboxChange = (event: { target: { name: any; checked: any; }; }) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    render() {
        // деструктуризация
        const {firstName, email, password, message, select, subscription, gender} = this.state;
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
                <br/>
                <input
                    type="emil"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                />
                <br/>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={this.handleChange}
                    onBlur={this.validatePassword}
                />
                <br/>
                <textarea name="message" value={message} onChange={this.handleChange}/>
                <br/>
                <select name="select" value={select} onChange={this.handleChange}>
                    <option value="" disabled>check me</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <br/>
                <span style={{display: "flex", flexDirection: "row"}}>
                    <p>Please check it</p>
                    <input style={{marginTop: 22, marginLeft: 10}}
                        type="checkbox"
                        name="subscription"
                        checked={subscription}
                        onChange={this.handleCheckboxChange}
                    />
                </span>

                <br/>
                <input type="radio" name="gender" value="male" onChange={this.handleChange} checked={gender === "male"}/> Male
                <input type="radio" name="gender" value="female" onChange={this.handleChange} checked={gender === "female"}/> Female
            </div>
        )
    }
}
