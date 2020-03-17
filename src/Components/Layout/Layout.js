import React from 'react';
import Aux1 from '../../hoc/Aux1';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = ( props ) => (
    <Aux1>
        <Toolbar />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux1>
)

export default Layout;
