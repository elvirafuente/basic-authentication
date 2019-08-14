/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';
import Header from './components/Header';
import Callback from './components/Callback';
import Error from './components/Error';
import Main from './components/Main';
import Secret from './components/Secret';

import './App.css';
function App() {
  const [ globalState, setGlobalState ] = useState({
    name: 'María',
    location: location.pathname.replace(/^\/?|\/$/g, "")
  });
  
  let mainComponent;
  switch(globalState.location){
    case "":
      mainComponent = <Main />;
      break;
    case "secret":
      mainComponent = <Secret />;
      break;
    default:
      mainComponent = <Error />;
  }

  return (
    <div className="app">
        <Header name={globalState.name}/>
        {mainComponent}
    </div>
  );
}

export default App;
