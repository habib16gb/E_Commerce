import { TCategory } from "@customTypes/categories.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TCategory[];

const actionGetCategories = createAsyncThunk(
  "categories/actionGetCategories",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get<TResponse>(
        "http://localhost:3000/api/category"
      );
      return response.data;
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export default actionGetCategories;
