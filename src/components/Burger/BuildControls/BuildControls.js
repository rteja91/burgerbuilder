import React from 'react';

import cls from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
]

const buildControls = (props) => {
    return(
        <div className={cls.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl =>{
               return <BuildControl 
               key={ctrl.label} 
               label={ctrl.label}
               added={()=>props.addedIngredient(ctrl.type)}
               removed={()=>props.removedIngredient(ctrl.type)}
               disabled={props.disabled[ctrl.type]}></BuildControl> 
            } )

            }
        </div>
    )
}

export default buildControls;
