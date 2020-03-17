import React from 'react';
import classes from './NavigationItem.css';

const navigationItem(props) => (
      <li className={classes.navigationItem}>
        <a href="/">A link</a>
      </li>
  );

export default navigationItem;
