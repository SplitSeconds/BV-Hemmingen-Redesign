import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Berichte from './pages/Berichte';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Links from './pages/Links';
import MitgliedWerden from './pages/MitgliedWerden';
import Presseecho from './pages/Presseecho';
import RoterFaden from './pages/RoterFaden';
import Satzung from './pages/Satzung';
import Veranstaltungen from './pages/Veranstaltungen';
import Vorstand from './pages/Vorstand';
import Footer from './pages/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/vorstand">Vorstand & Kontakt</NavLink>
          <NavLink to="/presse">Presseecho</NavLink>
          <NavLink to="/veranstaltungen">Veranstaltungen</NavLink>
          <image src="https://res.cloudinary.com/dpjdxqrce/image/upload/v1549646376/Header.jpg" alt="Logo" />
          <NavLink to="/beitreten">Mitglied werden</NavLink>
          <NavLink to="/berichte">Berichte</NavLink>
          <NavLink to="/roterfaden">Roter Faden</NavLink>
          <NavLink to="/satzung">Satzung</NavLink>
          <NavLink to="/imprint">Impressum</NavLink>
          <NavLink to="/links">Links</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/vorstand" component={Vorstand} />
          <Route path="/presse" component={Presseecho} />
          <Route path="/berichte" component={Berichte} />
          <Route path="/beitreten" component={MitgliedWerden} />
          <Route path="/links" component={Links} />
          <Route path="/roterfaden" component={RoterFaden} />
          <Route path="/satzung" component={Satzung} />
          <Route path="/imprint" component={Impressum} />
          <Route path="/veranstaltungen" component={Veranstaltungen} />
          <Route path="/imprint" component={Impressum} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
