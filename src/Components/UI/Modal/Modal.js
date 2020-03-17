import React from 'react';
import classes from './Modal.css';
import Aux1 from '../../../hoc/Aux1';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Aux1>
      <Backdrop show={props.show} clicked={props.modalclosed} />
      <div
          className={classes.Modal}
          style={{
              transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: props.show ? '1': '0'
          }}>
          {props.children}
      </div>
  </Aux1>
);

export default modal;
