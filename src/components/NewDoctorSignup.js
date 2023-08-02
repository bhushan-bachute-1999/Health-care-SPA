import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import { doctorRegistration } from "../store/doctorSlice";
import { useDispatch } from "react-redux";

const NewDoctorSignup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUp = (e) => {
    if (passwordRef.current !== confirmPasswordRef.current) {
      alert("Password and confirm password do not match");
    }
    e.preventDefault();
    navigate(
      `/doctor-sign-up/name=${nameRef.current}&email=${emailRef.current}`
    );
    dispatch(
      doctorRegistration({
        id: uniqid(),
        name: nameRef.current,
        email: emailRef.current,
        password: passwordRef.current,
        patients: [],
      })
    );
    console.log("Signed up");

    navigate("/doctor-login");
  };

  return (
    <form
      className="flex flex-col border border-black p-4 rounder-lg m-auto w-1/3 mt-8 bg-orange-400"
      onSubmit={signUp}
    >
      <div className="m-2">
        <label htmlFor="docName">Name:</label>
        <br></br>
        <input
          id="docName"
          className="h-8 border border-black rounded-lg px-4 py-2 m-2 w-4/5"
          type="text"
          placeholder="Enter name"
          onChange={(e) => (nameRef.current = e.target.value)}
        />
      </div>
      <div className="m-2">
        <label htmlFor="docEmail">Email:</label>
        <br></br>
        <input
          id="docEmail"
          className="h-8 border border-black rounded-lg px-4 py-2 m-2 w-4/5"
          type="email"
          placeholder="Enter email"
          onChange={(e) => (emailRef.current = e.target.value)}
        />
      </div>
      <div className="m-2">
        <label htmlFor="docPassword">Password:</label>
        <br></br>
        <input
          id="docPassword"
          className="h-8 border border-black rounded-lg px-4 py-2 m-2 w-4/5"
          type="password"
          placeholder="Password"
          onChange={(e) => (passwordRef.current = e.target.value)}
        />
      </div>
      <div className="m-2">
        <label htmlFor="docConfirmPassword">Confirm password:</label>
        <br></br>
        <input
          id="docConfirmPassword"
          className="h-8 border border-black rounded-lg px-4 py-2 m-2 w-4/5"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => (confirmPasswordRef.current = e.target.value)}
        />
      </div>
      <button
        className="px-4 py-2 bg-green-700 rounded-lg text-white w-1/4 m-auto"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
};

export default NewDoctorSignup;
