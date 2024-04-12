import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Badge, Box, Drawer, IconButton } from "@mui/material";
import React from "react";
import BagItems from "./BagItems";

const BagIcon = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerCart = (
    <Box sx={{ width: 400 }} role='presentation'>
      <BagItems setOpen={setOpen} />
    </Box>
  );
  return (
    <div>
      <Badge color='error' badgeContent={4}>
        <IconButton
          sx={{
            // "&:hover": {
            //   backgroundColor: "#4FE3C1",
            //   color: "black",
            // },
            borderRadius: "50%",
            transition: "all .2s ease-in-out",
          }}
          aria-label='bag'
          onClick={toggleDrawer(true)}
        >
          <ShoppingBagOutlinedIcon />
        </IconButton>
      </Badge>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerCart}
      </Drawer>
    </div>
  );
};

export default BagIcon;
