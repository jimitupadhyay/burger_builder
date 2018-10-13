import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Aux from '../../hoc/Aux';

const INGREDIENTS_PRICES = {
    bacon: 0.5,
    cheese: 1,
    salad: 0.8,
    meat: 0.5
};

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            bacon: 0,
            cheese: 0,
            salad: 0,
            meat: 0
        },
        totalPrice : 2
        
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        console.log(this.state.totalPrice);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0 ){
            return;
        }
        const updatedCount = oldCount - 1;
        const oldIngredients = {...this.state.ingredients};
        oldIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const price = INGREDIENTS_PRICES[type];
        const newPrice = oldPrice - price;

        this.setState({
            totalPrice: newPrice,
            ingredients: oldIngredients
        });

    } 

    render() {

        const disableInfo = {...this.state.ingredients};

        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return(
            <Aux>
                <Burger ingredientsProperty={this.state.ingredients} />
                <BuildControls ingredientAdded = { this.addIngredientHandler }
                               ingredientRemoved = { this.removeIngredientHandler } 
                               disabled = { disableInfo }
                               price = {this.state.totalPrice}
                                />
            </Aux>
        );
    }
}

export default BurgerBuilder;