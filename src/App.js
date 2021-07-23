import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Contacts } from './Components/Pages/Contacts/Contacts';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import ContactsItem from './Components/Pages/Contacts/ContactsItem';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/contacts'} exact component={Contacts} />
          <Route
            path={'/contacts/:id'}
            render={({ match }) => {
              const { id } = match.params;
              return <ContactsItem counter={id} />;
            }}
          />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
