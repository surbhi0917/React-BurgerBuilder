import React, {Component} from 'react';
import Aux1 from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdte() {
      console.log('[Order Summary] will update');
    }
  render() {
  const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li> );
        });

          return (
            <Aux1>
              <h3>Your Order</h3>
              <p> A delicious burger with the following ingredients:</p>
              <ul>
                  {ingredientSummary}
              </ul>
              <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
              <p>Continue to Checkout?</p>
              <Button btnstyle="Danger" pressed={this.props.purchaseCancelled}>CANCEL</Button>
              <Button btnstyle="Success" pressed={this.props.purchaseContinued}>CONTINUE</Button>
          </Aux1>
        );
      }
}

export default OrderSummary;
