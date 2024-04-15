import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { TProduct } from "@customTypes/products.type";

interface IProps {
  product: TProduct;
}

const Product = ({ product }: IProps) => {
  return (
    // <Card sx={{ pb: 2 }}>
    //   <CardActionArea>
    //     <CardMedia
    //       sx={{
    //         height: 140,
    //         backgroundImage: `url(${product.img})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundPosition: "center",
    //         backgroundSize: "cover",
    //       }}
    //       component={"div"}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant='h5' component='div'>
    //         {product.title}
    //       </Typography>
    //       <Typography variant='h6' color='text.secondary'>
    //         {product.quantity} EGP
    //       </Typography>
    //       <Typography className='mt-2' variant='body1' color='text.secondary'>
    //         {product.description}
    //       </Typography>
    //     </CardContent>
    //     {/* <CardActions>
    //       <Button
    //         size='small'
    //         color='primary'
    //         variant='contained'
    //         endIcon={<AddShoppingCartIcon />}
    //       >
    //         Add to cart
    //       </Button>
    //       <Button
    //         size='small'
    //         color='secondary'
    //         variant='contained'
    //         endIcon={<ModeEditOutlinedIcon />}
    //       >
    //         edit
    //       </Button>
    //     </CardActions> */}
    //   </CardActionArea>
    // </Card>
    <div
      className='product-card w-96 relative shadow-lg mx-auto my-12'
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className='badge absolute left-0 top-5 uppercase text-sm font-bold bg-red-500 text-white px-2 py-1'>
        Hot
      </div>
      <div
        className='product-tumb flex items-center justify-center h-72 p-12'
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <img
          className=' max-w-full max-h-full'
          src={product.img}
          alt={product.title}
        />
      </div>
      <div className='product-details p-7'>
        <span
          className='product-catagory block text-xs font-bold uppercase mb-4'
          style={{ color: "#ccc" }}
        >
          {product.cat_prefix}
        </span>
        <h4>
          <a
            className=' font-medium block mb-4 uppercase duration-300 hover:text-myPrimary-light '
            style={{ color: "#363636" }}
            href=''
          >
            {product.title}
          </a>
        </h4>
        <p
          className=' text-sm mb-4'
          style={{ color: "#999", lineHeight: "22px" }}
        >
          {product.description}
        </p>
        <div
          className='product-bottom-details overflow-hidden pt-5'
          style={{ border: "1px solid #eee" }}
        >
          <div className='product-price text-lg font-semibold text-myPrimary-light'>
            <small
              className=' font-normal line-through inline-block mr-1'
              style={{ fontSize: "80%" }}
            >
              {product.price}
            </small>
            ${product.price}
          </div>
          <div className='product-links text-right'>
            {/* <a href=""><i className="fa fa-heart"></i></a> */}
            <a
              className=' inline-block ml-1 duration-300 text-base hover:text-myPrimary-light'
              style={{ color: "#e1e1e1" }}
              href=''
            >
              <AddShoppingCartIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
