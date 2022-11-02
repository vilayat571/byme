import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  theme: boolean;
}
const initialState: IInitialState = {
  theme: true,
};
const changeThemeReducer = createSlice({
  name: "changeThemeReducer",
  initialState,
  reducers: {},
});
export default changeThemeReducer.reducer;
