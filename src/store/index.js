import { configureStore } from "@reduxjs/toolkit";
import doctorSlice from "./doctorSlice";
import patientSlice from "./patientSlice";

const store = configureStore({
  reducer: {
    doctor: doctorSlice,
    patient: patientSlice,
  },
});

export default store;
