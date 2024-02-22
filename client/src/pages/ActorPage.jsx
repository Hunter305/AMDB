import { Card, ListGroup } from "react-bootstrap";
import { useGetActorQuery } from "../slices/actorSlice";
import { Link, useParams } from "react-router-dom";

const ActorPage = () => {
  const { actorId } = useParams();
  const { data, isLoading, error } = useGetActorQuery(actorId);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Card>
          <Card.Header as="h2">{data?.actor?.name}</Card.Header>
          <Card.Body>
            <Card.Title>Biography</Card.Title>
            <Card.Text>Biography details will be added here.</Card.Text>
            <Card.Title>Movies</Card.Title>
            <ListGroup variant="flush">
              {data?.movies.map((movie, index) => (
                <ListGroup.Item key={index}>
                  <Link to={`/movie/${movie?._id}`}>{movie?.movieName}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default ActorPage;
