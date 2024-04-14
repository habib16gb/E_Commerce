import { TProduct } from "@customTypes/products.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];

const actionGetProductsByCat = createAsyncThunk(
  "categories/actionGetCategories",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get<TResponse>(
        "http://localhost:3000/api/products"
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

export default actionGetProductsByCat;
