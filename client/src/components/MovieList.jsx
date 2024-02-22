import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useGetMoviesQuery } from "../slices/movieApiSlice";

export const MoviesList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetMoviesQuery();

  console.log(data);
  //   useEffect(() => {
  //     if (movieStatus === "idle") {
  //       dispatch(fetchMovies());
  //     }
  //   }, [movieStatus, dispatch]);

  return (
    <Container>
      <Row>
        {data.map(movie => (
          <Col
            key={movie._id}
            md={4}
            className="mb-3"
          >
            <Card>
              <Card.Img
                variant="top"
                src={movie.posterName}
              />
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>{movie.plot}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
