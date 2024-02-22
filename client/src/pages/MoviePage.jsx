import { useParams, Link } from "react-router-dom";
import { useGetMovieQuery } from "../slices/movieApiSlice";
import { Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";

const MoviePage = () => {
  const { movieId } = useParams();
  const { data: movie, isLoading, error } = useGetMovieQuery(movieId);
  return (
    <div>
      {isLoading ? (
        <>
          <h2>Loading...</h2>
        </>
      ) : (
        <Row className="justify-content-md-center mt-5">
          <Col
            xs={12}
            md={8}
          >
            <Card>
              <Row noGutters={true}>
                <Col
                  md={4}
                  m-2
                >
                  <Card.Img
                    src={movie.poster}
                    alt="Movie Poster"
                    style={{ margin: "10px" }}
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>{movie.movieName}</Card.Title>
                    <Card.Text>{movie.plot}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <strong>Year of Release:</strong> {movie.yearOfRelease}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Producer:</strong> {movie.producer}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Actors:</strong>
                      <ul>
                        {movie.actors.map((actor, index) => (
                          <li key={index}>{actor}</li>
                        ))}
                      </ul>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};
export default MoviePage;
