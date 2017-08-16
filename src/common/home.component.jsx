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
  Button,
  Jumbotron,
  Form,
  FormGroup,
  Input,
  Container
} from 'reactstrap';

// Helper classes that mock an api call to GET the data
import helpers from "../utils/helpers";
import config from '../config'

class Home extends Component {

  constructor() {
    super()
    this.state = { pics: [] }
    this.state.search = ''
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch(event) {
    this.getImages(this.state.search);
  }

  handleChange(event){
    this.setState({search: event.target.value});
  }


  getImages(searchText) {
    var giphy = axios.create({
      baseURL: 'https://api.giphy.com/v1',
      timeout: 1000
    });

    giphy.get('/gifs/search?rating=g&q='+ searchText + '&api_key=' + config.giphy_api_key)
      .then(function (response) {
        console.log("response", response);
        this.setState({pics: response.data.data})
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
    }

    componentDidMount() {
      this.getImages('sports');
    }


  render() {
    //used for old code thats commented out below
    // let cars = helpers.getData();

    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Welcome to Render</h1>
                <Form inline onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Input value={this.state.search} onChange={this.handleChange} id="imageSearch" placeholder="Start Your Search" />
                  </FormGroup>
                  <Button onClick ={this.handleSearch}>Search</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Row>
          <Col>
            <h3>{this.state.search}</h3>
          </Col>
        </Row>

        <Row>
          {this.state.pics.map(function(pic, i) {
            return (
              <Col key={i} className="col-3">
                <Card>
                  <CardImg top width="100%" src={pic.images.downsized_large.url} alt={pic.slug}/>
                  <CardBlock>
                    {/* <CardTitle>{pic.slug}</CardTitle> */}
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


      </div>
    );
  }
}

export default Home
