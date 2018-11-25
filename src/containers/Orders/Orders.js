import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-order';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let Key in response.data) {
                    fetchedOrders.push({
                        ...response.data[Key],
                        id: Key
                    })
                }
                this.setState({ loading: false, orders: fetchedOrders })
                console.log(response);
            })
            .catch(error => {
                this.setState({ loading: false })
                console.log(error);
            })
    }

    render() {
        return (<div>
            {this.state.orders.map(order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                />
            ))}
        </div>);
    }

}

export default withErrorHandler(Orders, axios);