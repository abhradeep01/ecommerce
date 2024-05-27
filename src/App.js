import React from 'react';
import './App.css';
import Nav from './nav/Nav';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
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
