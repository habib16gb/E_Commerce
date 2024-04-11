import { Product } from "@components/index";
import { Col, Container, Row } from "react-bootstrap";

const Products = () => {
  return (
    <Container>
      <Row>
        <Col xs={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Product />
        </Col>
        <Col xs={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Product />
        </Col>
        <Col xs={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Product />
        </Col>
        <Col xs={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Product />
        </Col>
        <Col xs={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Product />
        </Col>
        <Col xs={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Product />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
