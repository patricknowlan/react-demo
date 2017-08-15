import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
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
import config from '../config'

class Home extends Component {

  constructor() {
    super()
    this.state = { pics: [] }
  }

  loadCommentsFromServer() {
    var giphy = axios.create({
      baseURL: 'https://api.giphy.com/v1',
      timeout: 1000
    });

    giphy.get('/gifs/search?q=dogs&api_key=' + config.giphy_api_key)
      .then(function (response) {
        console.log("response", response);
        this.setState({pics: response.data.data})
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
    }

    componentDidMount() {
      this.loadCommentsFromServer();
    }


  render() {
    //used for old code thats commented out below
    // let cars = helpers.getData();

    return (
      <div>
        <Row>
          <Col>
            <h3>DOGS</h3>
          </Col>
        </Row>

        <Row>
          {this.state.pics.map(function(pic, i) {
            return (
              <Col key={i} className="col-3">
                <Card>
                  <CardImg top width="100%" src={pic.images.downsized_large.url} alt={pic.slug}/>
                  <CardBlock>
                    <CardTitle>{pic.slug}</CardTitle>
                    <CardText>
                      <p>Rating: {pic.rating}</p>
                    </CardText>
                    <Button>Button</Button>
                  </CardBlock>
                </Card>
              </Col>
            );
          })}
        </Row>


        {/* <Row>
          {cars.map(function(object, i) {
            return (
              <Col key={i} className="col-3">
                <Card>
                  <CardImg top width="100%" src={object.media} alt={object.name}/>
                  <CardBlock>
                    <CardTitle>{object.name}</CardTitle>
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
        </Row> */}
      </div>
    );
  }
}

export default Home
