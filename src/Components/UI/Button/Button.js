import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <button
      className={[classes.Button,classes[props.btnstyle]].join(' ')}
      onClick={props.pressed}>{props.children}</button>
)

export default button;
