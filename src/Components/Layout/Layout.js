import React, {Component} from 'react';
import Aux1 from '../../hoc/Aux1';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state ={
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer};
        });
    }

    render(){
        return (
          <Aux1>
              <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
              <SideDrawer
                  open={this.state.showSideDrawer}
                  closed={this.sideDrawerClosedHandler} />
              <div>Toolbar, SideDrawer, Backdrop</div>
              <main className={classes.Content}>
                  {this.props.children}
              </main>
          </Aux1>
        )
    }
}
export default Layout;
