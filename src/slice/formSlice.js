import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: "",
  term: "",
  rate: "",
  type: "",
  submitted: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    setSubmitted: (state, action) => {
      state.submitted = action.payload;
    },
  },
});

export const { updateField, setSubmitted } = formSlice.actions;
export default formSlice.reducer;
