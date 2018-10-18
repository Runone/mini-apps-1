// import forms from '../client/components/forms';
// import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: '',
                email: '',
                password: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                CC: '',
                Exp: '',
                CVV: '',
                BillingZip: '',
                phoneNumber: '',
                nextButton: false,
                purchaseButton: false,
                isCheckedOut: false
            },
            page: 0
        };

        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        this.setState({
            page: this.state.page + 1
        })
    }

    handleSubmit() {
        this.setState({})
    }

    render() {
        if (this.state.page === 0) {
            return (
                <container>
                    <h2>Home Page</h2>
                    <button onClick={this.nextPage}>Checkout</button>
                </container>
            )
        } else if (this.state.page === 1) {
            return (
                <div>
                    <container>
                        <h2>Account Creation</h2>

                        <h3>Name:
                            <input placeholder="Name"/>
                        </h3>
                        <h3>Email:
                            <input placeholder="Email"/>
                        </h3>
                        <h3>Password:
                            <input placeholder="Password"/>
                        </h3>
                        <button onClick={this.nextPage}>Next</button>
                    </container>
                </div>
            );
        } else if (this.state.page === 2) {
            return (
                <container>
                    <h2>Ship Address</h2>

                    <h3>Address:
                        <input placeholder="Address"/>
                    </h3>
                    <h3>City:
                        <input placeholder="City"/>
                    </h3>
                    <h3>State:
                        <input placeholder="State"/>
                    </h3>
                    <h3>Zip Code:
                        <input placeholder="Zip Code"/>
                    </h3>
                    <button onClick={this.nextPage}>Next</button>
                </container>
            )
        } else if (this.state.page === 3) {
            return (
                <container>
                    <h2>Credit Card Info</h2>

                    <h3>CC#:
                        <input placeholder="CC#"/>
                    </h3>
                    <h3>Expiration:
                        <input placeholder="Expiration"/>
                    </h3>
                    <h3>Billing Zip Code:
                        <input placeholder="Billing Zip Code"/>
                    </h3>
                    <button onClick={this.nextPage}>Next</button>
                </container>
            )
        } else if (this.state.page === 4) {
            return (
                <container>
                    <h2>Confirmation</h2>
                    <button onClick={this.nextPage}>Purchase</button>
                </container>
            )
        }
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));


