import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
// import './App.scss';
import { Contacts } from './Components/Pages/Contacts/Contacts';
import { About } from './Components/Pages/About/About';
import Home from './Components/Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/contacts'} component={Contacts} />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
