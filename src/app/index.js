import React, { Component } from 'react';
import './App.css';
import Settings from '../settings/index';
import Dashboard from '../dashboard/index';
import NavBar from './NavBar';
import {AppProvider} from './AppProvider';
import Content from '../shared/Content';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <AppProvider>
          <NavBar/>
          <Content>
            <Settings/>
            <Dashboard/>
          </Content>
        </AppProvider>
      </div>
    );
  }
}

export default App;
