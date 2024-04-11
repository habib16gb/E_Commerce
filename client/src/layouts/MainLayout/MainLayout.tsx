import { Container } from "react-bootstrap";
import { Footer, Header } from "@components/commons";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

const { wrapper, container } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
