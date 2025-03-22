import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: "",
  term: "",
  rate: "",
  type: "",
  submitted: false,
  confirmedValues: null,
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

      state.confirmedValues = {
        amount: state.amount,
        term: state.term,
        rate: state.rate,
        type: state.type,
      };
    },

    resetForm: () => initialState,
  },
});

export const { updateField, setSubmitted, resetForm } = formSlice.actions;
export default formSlice.reducer;
