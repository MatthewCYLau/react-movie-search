import React, { Fragment, useContext } from "react";
import MoviesContext from "../context/movies-context";
import { Spinner, Container, Row, Col, Card } from "react-bootstrap";

const MoviesList = () => {
  const { movies } = useContext(MoviesContext);

  return movies.loading ? (
    <Container>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>
  ) : movies.error ? (
    <Container>
      <h4>Please try a different movie name</h4>
    </Container>
  ) : (
    <Fragment>
      <Container>
        <Row>
          {movies.movies.map((movie, index) => (
            <Col sm={4} key={index}>
              <Card>
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                  <Card.Text>{movie.Title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default MoviesList;
