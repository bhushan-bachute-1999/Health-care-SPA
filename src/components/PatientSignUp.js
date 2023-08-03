import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { patientRegister } from "../store/patientSlice";
import patientId from "../static/patient-id";

const PatientSignUp = () => {
  const fname = useRef("");
  const mname = useRef("");
  const lname = useRef("");
  const ageRef = useRef("");
  const genderRef = useRef(null);
  const addressRef = useRef("");
  const contactRef = useRef("");
  const bloodGroup = useRef("");

  const dispatch = useDispatch();
  const { loggedInDoctor } = useSelector((state) => state.doctor);
  const navigate = useNavigate();

  const generatePatientId = (fn, mn, ln) => {
    const key = fn[0] + mn[0] + ln[0];
    const hasKey = patientId.has(key);
    if (hasKey) {
      let len = patientId.get(key);
      return key + len;
    }
    patientId.set(key).push(fn + mn + ln);
    return;
  };

  const registerPatient = (e) => {
    e.preventDefault();
    navigate(
      `/doctor-dashboard/register-patient/name=${fname.current}&gender=${genderRef.current}&age=${ageRef.current}`
    );
    const id = generatePatientId(fname.current, mname.current, lname.current);
    dispatch(
      patientRegister({
        id: id,
        fname: fname.current,
        mname: mname.current,
        lname: lname.current,
        age: ageRef.current,
        gender: genderRef.current,
        address: addressRef.current,
        contact: contactRef.current,
        doctor: loggedInDoctor,
        bloodGroup: bloodGroup,
      })
    );
    navigate("/doctor-dashboard/home");
  };

  return (
    <form
      onSubmit={registerPatient}
      className="w-3/4 p-4 border border-black m-auto mt-10 rounded-lg"
    >
      <div className="flex mt-4">
        <div>
          <label htmlFor="p-name">First Name</label>
          <input
            className="h-8 px-4 py-2 m-2 border border-black rounded-lg"
            id="p-name"
            type="text"
            onChange={(e) => (fname.current = e.target.value)}
            placeholder="Enter patient name"
          />
        </div>
        <div className="ml-4">
          <label htmlFor="p-name">Middle Name</label>
          <input
            className="h-8 px-4 py-2 m-2 border border-black rounded-lg"
            id="p-name"
            type="text"
            onChange={(e) => (mname.current = e.target.value)}
            placeholder="Enter patient name"
          />
        </div>
        <div>
          <label htmlFor="p-name">Last Name</label>
          <input
            className="h-8 px-4 py-2 m-2 border border-black rounded-lg"
            id="p-name"
            type="text"
            onChange={(e) => (lname.current = e.target.value)}
            placeholder="Enter patient name"
          />
        </div>
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
          className="w-2/5 h-8 px-4 py-2 m-2 border border-black rounded-lg"
          id="p-age"
          type="number"
          onChange={(e) => (ageRef.current = e.target.value)}
          placeholder="Please enter the age"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="p-bg">Blood group</label>
        <select
          className="w-1/4 border border-black rounded-lg h-10 px-4 py-2 m-2"
          name="p-bg"
          id="p-bg"
        >
          <option
            onChange={(e) => (bloodGroup.current = e.target.value)}
            value="O +ve"
          >
            O +ve
          </option>
          <option
            onChange={(e) => (bloodGroup.current = e.target.value)}
            value="AB +ve"
          >
            AB +ve
          </option>
          <option
            onChange={(e) => (bloodGroup.current = e.target.value)}
            value="O -ve"
          >
            O -ve
          </option>
          <option
            onChange={(e) => (bloodGroup.current = e.target.value)}
            value="AB -ve"
          >
            AB -ve
          </option>
        </select>
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="p-contact">Contact</label>
        <input
          className="w-2/5 h-8 px-4 py-2 m-2 border border-black rounded-lg"
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

export default PatientSignUp;
