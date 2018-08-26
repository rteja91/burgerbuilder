import React from 'react';
import cls from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
const burger = (props) => {
    let tranformedIngredients = Object.keys(props.ingredients).map((ingKey,index) => {
        return [...Array(props.ingredients[ingKey])].map((_,i ) => {
            return <BurgerIngredient key={ingKey + i} type={ingKey} />
        })
    }).reduce((arr, el)=>{
        return arr.concat(el);
    }, []);
    if(tranformedIngredients.length === 0){
        tranformedIngredients = <p>Please start adding ingredients</p>
    }
    return(
        <div className={cls.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger ;