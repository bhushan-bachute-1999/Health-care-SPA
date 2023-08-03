import { createSlice } from "@reduxjs/toolkit";

/*
    patient = {
        doctorName: XYZ,
        NextVisitDate: Date,
        Prescription: Pr,

    }
*/

const initialState = {
  patients: [],
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    patientLogin: (state, action) => {},
    patientRegister: (state, action) => {
      state.patients.push(action.payload);
    },
  },
});

export default patientSlice.reducer;

export const { patientLogin, patientRegister } = patientSlice.actions;
