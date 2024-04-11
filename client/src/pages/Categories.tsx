import { Category } from "@components/index";
import { Col, Container, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { actionGetCategories } from "@store/categories/categoriesSlice";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.categoriesSlice);
  useEffect(() => {
    dispatch(actionGetCategories());
  }, [dispatch]);

  const categoriesList = () =>
    records.length > 0 ? (
      records.map((record) => (
        <Col key={record.id}>
          <Category {...record} />
        </Col>
      ))
    ) : (
      <p>no categories</p>
    );
  return (
    <Container>
      <Row>{categoriesList()}</Row>
    </Container>
  );
};

export default Categories;
