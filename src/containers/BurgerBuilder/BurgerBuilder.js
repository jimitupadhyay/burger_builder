import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            bacon: 1,
            cheese: 2,
            salad: 1,
            meat: 2
        }
    }
    render() {
        return(
            <Aux>
                <Burger ingredientsProperty={this.state.ingredients} />
                <div>Burger Ingredients</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;