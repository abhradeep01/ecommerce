import React from 'react';
import './App.css';
import Nav from './nav/Nav';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import Signup from './additional/form/signup/signup';
import Login from './additional/form/log in/login';
// import Styles from './component/style/styles.module.css';
function App() {

  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      
      <Footer />
    </div>
  );
}

export default App;
