import { createSlice } from "@reduxjs/toolkit";

type TCategory = { id: number; title: string; prefix: string; img: string };

interface ICategories {
  records: TCategory[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
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
});

export default categoriesSlice.reducer;
