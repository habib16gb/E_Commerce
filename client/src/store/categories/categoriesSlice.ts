import { createSlice } from "@reduxjs/toolkit";
import actionGetCategories from "./actions/actionGetCategories";
import { TCategory, TError, TLoading } from "@customTypes/index";

interface ICategories {
  records: TCategory[];
  loading: TLoading;
  error: TError;
}

const initialState: ICategories = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actionGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actionGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actionGetCategories };
export default categoriesSlice.reducer;
