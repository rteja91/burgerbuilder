import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import cls from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            pincode: ""
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({ loading: true });
        //alert('You Continue!');
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Ravi",
                address: {
                    street: "201, RR Nivas",
                    zipCode: "500081",
                    country: "India"
                },
                email: "test@test.com"
            },
            deliveryMethod: "DTDC"
        }
        axios.post("/orders.json", order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
                console.log(response);
            })
            .catch(error => {
                this.setState({ loading: false })
                console.log(error);
            })
    }

    render() {
        let form = (
            <form>
                <input type="text" className={cls.Input} name="name" placeholder="Enter Your Name" />
                <input type="text" className={cls.Input} name="email" placeholder="Enter Your Email" />
                <input type="text" className={cls.Input} name="street" placeholder="Street" />
                <input type="text" className={cls.Input} name="pincode" placeholder="Zip Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={cls.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData;