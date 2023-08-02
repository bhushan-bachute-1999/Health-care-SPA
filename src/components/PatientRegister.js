import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { patientRegister } from "../store/patientSlice";
import uniqid from "uniqid";

const PatientRegister = () => {
  const nameRef = useRef("");
  const ageRef = useRef("");
  const genderRef = useRef(null);
  const addressRef = useRef("");
  const contactRef = useRef("");
  const dispatch = useDispatch();
  const { loggedInDoctor } = useSelector((state) => state.doctor);
  const navigate = useNavigate();

  const registerPatient = (e) => {
    e.preventDefault();
    navigate(
      `/doctor-dashboard/register-patient/name=${nameRef.current}&gender=${genderRef.current}&age=${ageRef.current}`
    );
    dispatch(
      patientRegister({
        id: uniqid(),
        name: nameRef.current,
        age: ageRef.current,
        gender: genderRef.current,
        address: addressRef.current,
        contact: contactRef.current,
        doctor: loggedInDoctor,
      })
    );
    navigate("/doctor-dashboard/home");
  };

  return (
    <form
      onSubmit={registerPatient}
      className="w-2/5 p-4 border border-black m-auto mt-10 rounded-lg"
    >
      <div className="flex flex-col mt-4">
        <label htmlFor="p-name">Name</label>
        <input
          className="h-8 px-4 py-2 m-2 border border-black rounded-lg"
          id="p-name"
          type="text"
          onChange={(e) => (nameRef.current = e.target.value)}
          placeholder="Enter patient name"
        />
      </div>
      <div className="flex flex-col mt-4">
        <span>Gender</span>
        <div>
          <input
            id="p-gender"
            type="radio"
            name="gender"
            value="Male"
            onChange={(e) => (genderRef.current = e.target.value)}
          />
          <label className="ml-4" htmlFor="p-gender">
            Male
          </label>
        </div>
        <div>
          <input
            id="p-gender"
            type="radio"
            name="gender"
            value="Female"
            onChange={(e) => (genderRef.current = e.target.value)}
          />
          <label className="ml-4" htmlFor="p-gender">
            Female
          </label>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="p-age">Age</label>
        <input
          className="h-8 px-4 py-2 m-2 border border-black rounded-lg"
          id="p-age"
          type="number"
          onChange={(e) => (ageRef.current = e.target.value)}
          placeholder="Please enter the age"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="p-contact">Contact</label>
        <input
          className="h-8 px-4 py-2 m-2 border border-black rounded-lg"
          id="p-contact"
          type="tel"
          onChange={(e) => (contactRef.current = e.target.value)}
          placeholder="+91 1234567890"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="p-address">Address</label>
        <input
          className="h-8 px-4 py-2 m-2 border border-black rounded-lg"
          id="p-address"
          type="text"
          onChange={(e) => (addressRef.current = e.target.value)}
          placeholder="Please enter the address"
        />
      </div>
      <button
        className="text-center px-4 py-2 m-2 bg-green-700 rounded-lg text-white"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default PatientRegister;
