import React, { Component } from 'react';
//import Firebase from 'firebase';
import fire from './components/AdminPanel/firebase';
import Toolbar from './components/Toolbar/Toolbar';
import Sidedrawer from './components/Togglebutton/Sidedrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import './components/Events/pixel.jpg';
import './App.css';
import Main from './components/Main';
import Login from './components/Login/Login';
import Home from './components/Home/Home';



class App extends Component {



  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }




  state = {
    sideDrawerOpen : false
  };

  drawerToggleListner = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backDropHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backdrop = {this.backDropHandler}/>;
    }

    return (

      <div style={{height:'100%'}}>

        <Toolbar drawerListner = {this.drawerToggleListner} />
        <Sidedrawer showit={this.state.sideDrawerOpen}/>

        {backdrop}
        <Main />
        <Footer/>
        <div className="space"></div>

       </div>
    );
  }

  render() {
    return (
    <div className="space" >{this.state.user ?  ( <Home/>) : (<Login />)}</div>
  );
  }
}

export default App;
