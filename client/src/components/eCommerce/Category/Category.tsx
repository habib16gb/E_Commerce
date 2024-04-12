import { TCategory } from "@customTypes/categories.type";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <Box
      component={Link}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "8px",
        boxShadow: "4px 4px 8px rgba(0,0,0,0.3) , -4px -4px 8px #fff",
        padding: "8px",
        borderRadius: "8px",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      to={`/categories/${prefix}`}
    >
      <div className={""}>
        <img className='w-32 h-32 rounded-full' src={img} alt={title} />
      </div>
      <h4 className=' font-semibold mt-2 capitalize text-mySecondary-light'>
        {title}
      </h4>
    </Box>
  );
};

export default Category;
