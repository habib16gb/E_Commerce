import { Footer, Header } from "@components/commons";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Header />
      <div className='flex-1 p-8'>
        <Outlet />
      </div>
      <Footer />
    </Box>
  );
};

export default MainLayout;
