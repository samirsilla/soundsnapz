import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import SignUp from './components/SignUp';
import Charts from './components/Charts';
import Wave from './components/Wave';
import GiftCard from './components/GiftCard';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <SignUp />
        <Charts />
        <Wave />
        <GiftCard />
        <Footer />
      </div>
    );
  }
}

export default App;
