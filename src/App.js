import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar color="primary" toggleable>
            <NavbarToggler right onClick={this.toggle}/>
            <NavbarBrand className="text-white" href="/">reactstrap demo</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to={'/about'}>
                    <NavLink className="text-white">About</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Jumbotron>
            <Container>
              <Row>
                <Col>
                  <h1>Welcome to React</h1>
                  <p>
                    <Button tag="a" color="success" size="large" href="http://reactstrap.github.io" target="_blank">
                      View Reactstrap Docs
                    </Button>
                  </p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
          <Container>
            <Route exact={true} path="/" component={Home}/>
          </Container>
          <Route path='/about' component={About}/>
        </div>
      </Router>

    );
  }
}

export default App;
