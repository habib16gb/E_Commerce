import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  console.log(params);
  return <div>product id page: {params?.id} </div>;
};

export default Product;
