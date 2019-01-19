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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
    // api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/about">Vorstand</NavLink>
          <NavLink to="/portfolio">Presseecho</NavLink>
          <NavLink to="/blog">Veranstaltungen</NavLink>
          <NavLink to="/berichte">Berichte</NavLink>
          <NavLink to="/imprint">Impressum</NavLink>
          <NavLink to="/links">Links</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Presseecho} />
          <Route path="/berichte" component={Berichte} />
          <Route path="/webdev" component={Webdev} />
          <Route path="/design" component={Design} />
          <Route path="/blog" component={Veranstaltungen} />
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
