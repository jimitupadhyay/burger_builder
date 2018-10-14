import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type:"salad"},
    { label: "Bacon", type:"bacon"},
    { label: "Cheese", type:"cheese"},
    { label: "Meat", type:"meat"}
];

const BuildControls = (props) => {
    return(<div className={classes.BuildControls}>
            <p>Burger price : { props.price.toFixed(2) } </p>
        {
            
            controls.map( cntrl => (
                
                <BuildControl added={() => props.ingredientAdded(cntrl.type)} 
                                key={cntrl.label} 
                                label={cntrl.label} 
                                removed={() => props.ingredientRemoved(cntrl.type)}
                                disabled = {props.disabled[cntrl.type]}
                                />
            
            ))
        }
        <button
            disabled = {!props.purchasable}
        >ORDER NOW</button>
    </div>
    );
}

export default BuildControls;