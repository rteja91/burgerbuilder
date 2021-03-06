import React, {Component} from 'react';
import propTypes from 'prop-types';
import cls from './BurgerIngredient.css';


class burgerIngredient extends Component {
    render(){
        let ingredient =  null;
        switch(this.props.type){
            case ('bread-bottom'):
                ingredient = <div className={cls.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={cls.BreadTop}>
                        <div className={cls.Seeds1}></div>
                        <div className={cls.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = (
                    <div className={cls.Meat}></div>
                );
                break;
            case ('cheese'):
                ingredient = (
                    <div className={cls.Cheese}></div>
                );
                break;
            case ('salad'):
                ingredient = (
                    <div className={cls.Salad}></div>
                );  
                break;
            case ('bacon'):
                ingredient = (
                    <div className={cls.Bacon}></div>
                );
                break; 
            default:
                ingredient = null;
    
        }
        return ingredient;
    }
} 

burgerIngredient.propTypes = {
    type : propTypes.string
}

export default burgerIngredient;