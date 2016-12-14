import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';


class Film extends Component {

  render() {

    console.log(this.props.film);

    return (

      <Grid>
        <Row>
          <Col xs={12}>
            name: {this.props.film.name}
         </Col>
        </Row>
        <Row>
          <Col xs={12}>
            Company: {this.props.film.company}
         </Col>
        </Row>
        <Row>
          <Col xs={12}>
           <a href={this.props.film.url}> <img  src={this.props.film.image}/> </a>
         </Col>
        </Row>
      </Grid>
    )
  }
}

export default Film;
