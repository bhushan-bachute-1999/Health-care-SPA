import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

const initialState = {
  doctors: [],
  loggedInDoctor: {
    name: "Guest",
    email: "Guest@gmail.com",
  },
  searchText: "",
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    registerPatient: (state, action) => {
      state.doctors.patients.push(action.payload);
    },

    doctorRegistration: (state, action) => {
      if (state.doctors.find((doc) => doc.email === action.payload.email)) {
        alert("Account already registered");
      }
      state.doctors.push(action.payload);
    },

    doctorLogin: (state, action) => {
      const index = state.doctors.findIndex(
        (p) => p.email === action.payload.email
      );
      if (index === -1) {
        alert("Please sing up to continue");
        return redirect("/doctor-sign-up");
      } else {
        if (state.doctors[index].password !== action.payload.password) {
          alert("Username / Password incorrect");
        }
        state.loggedInDoctor.name = state.doctors[index].name;
        state.loggedInDoctor.email = action.payload.email;
      }
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  registerPatient,
  doctorRegistration,
  doctorLogin,
  setSearchText,
} = doctorSlice.actions;

export default doctorSlice.reducer;
