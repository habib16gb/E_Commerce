import { createSlice } from "@reduxjs/toolkit";
import actionGetProducts from "./actions/actionGetProductsByCat";
import { TProduct, TError, TLoading } from "@customTypes/index";

interface ICategories {
  records: TProduct[];
  loading: TLoading;
  error: TError;
}

const initialState: ICategories = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actionGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actionGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actionGetProducts };
export default productsSlice.reducer;
