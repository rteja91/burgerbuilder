import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';




const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }
    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            }).catch(error => {
                this.setState({ error: true });
            });
    }
    updatePurchaseSate = (ingredients) => {
        const sum = Object.keys(ingredients).map(ingKey => {
            return ingredients[ingKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0)

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseSate(updatedIngredients);
    }

    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceReduce = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduce;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseSate(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }
    purchaseContinueHandler = () => {
        // this.setState({ loading: true });
        // //alert('You Continue!');
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Ravi",
        //         address: {
        //             street: "201, RR Nivas",
        //             zipCode: "500081",
        //             country: "India"
        //         },
        //         email: "test@test.com"
        //     },
        //     deliveryMethod: "DTDC"
        // }
        // axios.post("/orders.json", order)
        //     .then(response => {
        //         this.setState({ loading: false, purchasing: false })
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false, purchasing: false })
        //         console.log(error);
        //     })
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: "/checkout",
            search: '?' + queryString
        });
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        price={this.state.totalPrice}
                        addedIngredient={this.addIngredientHandler}
                        removedIngredient={this.removeIngredientHandler}
                        purchasable={this.state.purchasable}
                        disabled={disabledInfo}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            );
            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler} />;
            if (this.state.loading) {
                orderSummary = <Spinner />;
            }
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);