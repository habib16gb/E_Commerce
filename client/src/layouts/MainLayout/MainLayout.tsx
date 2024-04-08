import { Container } from "react-bootstrap";
import { Header } from "../../components/commons";
import styles from "./styles.module.css";

const { wrapper, container } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>main layout</div>
    </Container>
  );
};

export default MainLayout;
