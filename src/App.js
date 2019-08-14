import React from 'react';
import Header from './components/Header';
import Callback from './components/Callback';
import Error from './components/Error';
import Main from './components/Main';
import Secret from './components/Secret';

import './App.css';

function App() {
  return (
    <div className="app">
        <Header />
        <Main />
        <Secret />
        <Error />
        <Callback />
    </div>
  );
}

export default App;
