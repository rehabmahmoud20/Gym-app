import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import gymData from "../axios";

const initialState = {
  isloading: false,
  gymData: [],
  error: null,
};

export const getGymData = createAsyncThunk(
  "gems/getGyms", //type
  async (_, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const {data }= await gymData().get();

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const gymSlice = createSlice({
  name: "gym",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGymData.pending, (state) => {
        state.isloading = true;
        state.error = null;
      })
      .addCase(getGymData.fulfilled, (state,action) => {
        state.isloading = false;
        state.gymData = action.payload;
      })
      .addCase(getGymData.rejected, (state,action) => {
        state.error = action.payload;
        state.isloading = false;
      });
  },
});
