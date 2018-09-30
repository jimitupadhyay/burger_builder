import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredientsProperty).map((igKey) => {
        
        return [...Array(props.ingredientsProperty[igKey])].map((p, i) => {

            console.log(igKey);

            return <BurgerIngredient key={igKey + i} type={igKey} />

        });

    });

    return(

        <div className={classes.Burger}>

                <BurgerIngredient type="bread-top"/>

                {transformedIngredients}

                <BurgerIngredient type="bread-bottom"/>

        </div>

    );
    
}

export default Burger;