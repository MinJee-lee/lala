import React from "react";
import { Contents, NavBar } from './components';
import { HashRouter as Router } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a href="/"><Image className="App-logo" src={logo}/></a>
        </div>
          <Router>
            <NavBar/>
            <Contents/>
          </Router>
        <Container>
          <Row className="mt-5">
          </Row>
        </Container>
      </div>
    );
  }
}

