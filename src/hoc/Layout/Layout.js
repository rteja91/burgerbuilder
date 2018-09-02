import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import cls from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class layout extends Component  {

    state = {
        showSideDrawer : false
    }

    SideDrawerClosedHandler = ()=> {
        this.setState({showSideDrawer:false});
    }
    SideDrawerToggleHandler = () => {
        this.setState((prevState)=> { 
            return { showSideDrawer: !prevState.showSideDrawer};
        });
    }
    
    render () {
        return (
            <Aux>
        
            <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>
            <main className={cls.Content}>
                {this.props.children}
            </main>
            </Aux>
        );
    }

}

export default layout;