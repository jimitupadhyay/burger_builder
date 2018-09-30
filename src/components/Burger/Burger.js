import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredientsProperty).map((igKey) => {
        
        return [...Array(props.ingredientsProperty[igKey])].map((p, i) => {

            console.log(igKey);

            return <BurgerIngredient key={igKey + i} type={igKey} />

        });

    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    console.log(transformedIngredients.length);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please, start adding ingredients here....</p>
    }
    return(

        <div className={classes.Burger}>

                <BurgerIngredient type="bread-top"/>

                {transformedIngredients}

                <BurgerIngredient type="bread-bottom"/>

        </div>

    );

}

export default Burger;