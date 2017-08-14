import React, {Component} from 'react';
import {Link} from 'react-router';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

// Helper classes that mock an api call to GET the data
import helpers from "../utils/helpers";

class Home extends Component {

  render() {
    let cars = helpers.getData();
    console.log('cars', cars);

    return (
      <div>
        <Row>
          <Col>
            <h3>CARS</h3>
          </Col>
        </Row>
        <Row>
          {cars.map(function(object, i) {
            return (
              <Col key={i}>
                <Card>
                  <CardImg top width="100%" src={object.media} alt={object.name}/>
                  <CardBlock>
                    <CardTitle>{object.name}</CardTitle>
                    {/* <CardSubtitle>FOR SALE</CardSubtitle> */}
                    <CardText>
                      <p>{object.price}</p>
                      <p>{object.year}</p>
                      <p>{object.make}</p>
                      <p>{object.model}</p>
                    </CardText>
                    <Button>Button</Button>
                  </CardBlock>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Home
