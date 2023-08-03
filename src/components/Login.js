import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { doctorLogin } from "../store/doctorSlice";

const DoctorLogin = () => {
  const [docEmail, setDocEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(doctorLogin({ email: docEmail, password: password }));
    navigate("/doctor-dashboard/home");
  };
  return (
    <form
      onSubmit={handleLogin}
      className="pt-10 m-auto w-1/4 flex flex-col items-center"
    >
      <input
        className="border border-black mb-3 px-2 py-1 rounded-md w-full"
        type="email"
        id="username"
        value={docEmail}
        onChange={(e) => setDocEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        className="border border-black mb-3 px-2 py-1 rounded-md w-full"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="bg-orange-400 px-3 py-1 rounded-md" type="submit">
        Log in
      </button>

      <Link
        to="/doctor-sign-up"
        className="bg-green-700 px-4 py-2 rounded-lg text-white mt-4"
      >
        <span>New registration</span>
      </Link>
    </form>
  );
};

export default DoctorLogin;
