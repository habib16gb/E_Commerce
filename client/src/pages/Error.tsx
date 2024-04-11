import { Container } from "react-bootstrap";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <Container className='notFound'>
      <h1>- {errorStatus} -</h1>
      <p>{errorStatusText}</p>
      <Link to={"/"} replace={true}>
        back home
      </Link>
    </Container>
  );
};

export default Error;
