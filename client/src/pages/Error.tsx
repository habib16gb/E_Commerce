import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container className='notFound'>
      <h1>- 404 -</h1>
      <p>page not found</p>
      <Link to={"/"} replace={true}>
        back home
      </Link>
    </Container>
  );
};

export default Error;
