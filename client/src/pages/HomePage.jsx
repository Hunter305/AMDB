import { Col, Row } from "react-bootstrap";
import Movie from "../components/Movie";
import { useGetMoviesQuery } from "../slices/movieApiSlice";

const HomePage = () => {
  const { data, isLoading, error } = useGetMoviesQuery();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Row>
          {data?.map(movie => (
            <Col
              key={movie._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Movie movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default HomePage;
