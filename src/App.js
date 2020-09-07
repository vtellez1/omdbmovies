import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import Banner from './components/banner/banner.component';

import Homepage from './pages/homepage.component';
import NominatedList from './pages/nominatedList.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/nominated" component={NominatedList}/>
      </Switch>
    </div>
  );
}

export default App;
