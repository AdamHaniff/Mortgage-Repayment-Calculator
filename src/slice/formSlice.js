import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: "",
  term: "",
  rate: "",
  type: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { updateField } = formSlice.actions;
export default formSlice.reducer;
