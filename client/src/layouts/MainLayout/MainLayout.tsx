import { Container } from "react-bootstrap";
import { Footer, Header } from "@components/commons";
import styles from "./styles.module.css";

const { wrapper, container } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>main layout</div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
