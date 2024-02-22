import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/movie/${movie.id}`}>
        <Card.Img
          src={movie.poster}
          variant="top"
        />
      </Link>

      <Card.Body>
        <Link to={`/movie/${movie.id}`}>
          <Card.Title
            as="div"
            className="movie-title"
          >
            <strong>{movie.movieName}</strong>
          </Card.Title>
        </Link>
        <p>
          <strong>cast & crew : </strong>
          {movie.actors.join(", ")}
        </p>
      </Card.Body>
    </Card>
  );
};

export default Movie;
