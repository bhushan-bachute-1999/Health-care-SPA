import { createSlice } from "@reduxjs/toolkit";

/*
    patient = {
        doctorName: XYZ,
        NextVisitDate: Date,
        Prescription: Pr,

    }
*/

const initialState = {
  patients: [
    {
      name: "Bhushan",
      LVD: "31/07/2023",
      city: "Barshi",
      doctor: { name: "Surana", email: "surana@gmail.com" },
    },
    {
      name: "Tejas",
      LVD: "31/07/2023",
      city: "Barshi",
      doctor: { name: "Padwal", email: "padwal@gmail.com" },
    },
    {
      name: "Pawan",
      LVD: "31/07/2023",
      city: "Barshi",
      doctor: { name: "Andhare", email: "andhare@gmail.com" },
    },
    {
      name: "Pramod",
      LVD: "31/07/2023",
      city: "Barshi",
      doctor: { name: "Padwal", email: "padwal@gmail.com" },
    },
    {
      name: "Nikhil",
      LVD: "31/07/2023",
      city: "Barshi",
      doctor: { name: "Surana", email: "surana@gmail.com" },
    },
  ],
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    patientLogin: (state, action) => {},
    patientSignup: (state, action) => {},
  },
});

export default patientSlice.reducer;

export const { patientLogin, patientSignup } = patientSlice.actions;
