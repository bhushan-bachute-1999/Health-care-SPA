import { useRef } from "react";
import Logo from "../static/Logo.png";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../store/doctorSlice";

const PatientInfo = (props) => {
  const { fname, mname, lname, age, address, contact, gender, bloodGroup } =
    props.info;
  return (
    <tr>
      <td className="border w-3/12 border-black py-2 px-4 text-center">
        {fname + " " + mname + " " + lname}
      </td>
      <td className="border w-2/12 border-black py-2 px-4 text-center">
        {gender}
      </td>
      <td className="border w-2/12 border-black py-2 px-4 text-center">
        {bloodGroup}
      </td>
      <td className="border w-2/12 border-black py-2 px-4 text-center">
        {age}
      </td>
      <td className="border w-3/12 border-black py-2 px-4 text-center">
        {address}
      </td>
      <td className="border w-2/12 border-black py-2 px-4 text-center">
        {contact}
      </td>
    </tr>
  );
};

const Header = () => {
  const searchRef = useRef("");
  const dispatch = useDispatch();
  const { loggedInDoctor } = useSelector((state) => state.doctor);
  return (
    <div className="flex justify-between shadow-lg px-4 py-2 items-center">
      <div className="flex justify-between items-center">
        <img className="h-10 w-10 mr-4" alt="logo" src={Logo} />
        <span className="mr-10">{loggedInDoctor.name}</span>
      </div>
      <div className="flex w-5/12 items-center">
        <input
          className="border border-black h-8 w-full px-2 py-1"
          type="text"
          placeholder="Search patient"
          // value={searchRef.current}
          onChange={(e) => (searchRef.current = e.target.value)}
        />
        <div
          onClick={() => dispatch(setSearchText(searchRef.current))}
          className="h-8 flex items-center justify-center py-1 px-4 border border-black"
        >
          <img
            className="h-4 w-4"
            alt="search-icon"
            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
          />
        </div>
      </div>
      <Link
        to="/doctor-dashboard/register-patient"
        className="border border-white bg-green-700 shadow-md px-2 py-1 h-8 text-white rounded-lg"
      >
        Register patient
      </Link>
    </div>
  );
};

export const PatientListTable = () => {
  const { patients } = useSelector((state) => state.patient);
  const { loggedInDoctor, searchText } = useSelector((state) => state.doctor);
  console.log("P", patients);
  const searchResult = patients.filter(
    (p) =>
      p.doctor.email === loggedInDoctor.email &&
      p.fname.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("Search", searchResult);

  if (searchResult.length === 0) {
    return (
      <span className="font-extrabold text-3xl m-auto">No patient record</span>
    );
  }
  return (
    <table className="m-4">
      <thead>
        <tr>
          <th className="border w-4/12 border-black py-2 px-4 text-center">
            Name
          </th>
          <th className="border w-1/12 border-black py-2 px-4 text-center">
            Gender
          </th>
          <th className="border w-1/12 border-black py-2 px-4 text-center">
            Blood group
          </th>
          <th className="border w-1/12 border-black py-2 px-4 text-center">
            Age
          </th>
          <th className="border w-4/12 border-black py-2 px-4 text-center">
            Address
          </th>
          <th className="border w-3/12 border-black py-2 px-4 text-center">
            Contact
          </th>
        </tr>
      </thead>
      <tbody>
        {searchResult.map((info, index) => (
          <PatientInfo key={index} info={info} />
        ))}
      </tbody>
    </table>
  );
};

const DoctorDashboard = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DoctorDashboard;
