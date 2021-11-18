import React from "react";

export class Form extends React.Component<any, any> {

    state = {
        email: '',
        isAgreeWithTerms: false
    }

    handleEmail = (event: { target: { value: any; }; }) => {
        this.setState({email: event.target.value})
    }

    handleCheckbox = (event: { target: { checked: any; }; }) => {
        this.setState({isAgreeWithTerms: event.target.checked})
    }

    handleSubmit = () => {
        const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(this.state.email)
        const isValidCheckbox = this.state.isAgreeWithTerms

        if (!isValidEmail) {
            alert('Your email is not valid!')
            return
        }

        if (!isValidCheckbox) {
            alert('Please agree with conditions!')
            return
        }

        this.setState({
            email: '',
            isAgreeWithTerms: false
        })
        alert('Thank you for subscription!')
    }

    render() {
        // деструктуризация
        const {email, isAgreeWithTerms} = this.state;
        return (
            <div>
                <input
                    type="emil"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleEmail}
                />
                <br/>
                <span style={{display: "flex", flexDirection: "row"}}>
                    <input style={{marginTop: 22}}
                        type="checkbox"
                        name="subscription"
                        checked={isAgreeWithTerms}
                        onChange={this.handleCheckbox}
                    />
                    <p>I agree with terms and conditions</p>
                </span>
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        )
    }
}
