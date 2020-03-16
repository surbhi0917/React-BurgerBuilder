import React from 'react';
import Aux1 from '../../../hoc/Aux1';

const orderSummary = (props) => {
      const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey => {
                return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li> );
            });
      return (
          <Aux1>
              <h3>Your Order</h3>
              <p> A delicious burger with the following ingredients:</p>
              <ul>
                  {ingredientSummary}
              </ul>
              <p>Continue to Checkout?</p>
          </Aux1>
      )
};

export default orderSummary;
