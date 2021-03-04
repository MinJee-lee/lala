import React, { Component } from 'react';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Home, About, Contact } from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
