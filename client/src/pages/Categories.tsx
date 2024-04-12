import { Category } from "@components/index";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { Box, Grid } from "@mui/material";
import { actionGetCategories } from "@store/categories/categoriesSlice";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.categoriesSlice);
  useEffect(() => {
    dispatch(actionGetCategories());
  }, [dispatch]);

  const categoriesList = () => (
    <Grid container spacing={8}>
      {records.length > 0 ? (
        records.map((record) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={record.id}>
            <Category {...record} />
          </Grid>
        ))
      ) : (
        <Grid item>no categories</Grid>
      )}
    </Grid>
  );
  return <Box>{categoriesList()}</Box>;
};

export default Categories;
