import { Category } from "@components/index";
import { Col, Container, Row } from "react-bootstrap";

const Categories = () => {
  return (
    <Container>
      <Row>
        <Col xs={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Category />
        </Col>
        <Col xs={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Category />
        </Col>
        <Col xs={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Category />
        </Col>
        <Col xs={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Category />
        </Col>
        <Col xs={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Category />
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
