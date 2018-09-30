import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            bacon: 0,
            cheese: 0,
            salad: 0,
            meat: 0
        }
    }
    render() {
        return(
            <Aux>
                <Burger ingredientsProperty={this.state.ingredients} />
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;