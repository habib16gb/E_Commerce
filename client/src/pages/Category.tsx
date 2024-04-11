import { useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();
  console.log(params);
  return <div>Category prefix page: {params?.prefix} </div>;
};

export default Category;
