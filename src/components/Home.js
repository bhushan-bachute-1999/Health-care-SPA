import { Link } from "react-router-dom";
import Logo from "../static/Logo.png";

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center flex-col m-auto pt-8 bg-red-200">
      <img alt="logo-img" className="w-1/4" src={Logo} />
      <Link
        to="/doctor-login"
        className="text-2xl bg-emerald-600 rounded-lg m-2 py-2 px-4 flex flex-row justify-center items-center w-60"
      >
        <img
          alt="doc-icon"
          className="w-10 mr-4 "
          src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
        />
        <span className="text-white">Doctor</span>
      </Link>
      <h1 className="text-2xl bg-emerald-600 rounded-lg m-2 py-2 px-4 flex flex-row justify-center items-center w-60">
        <img
          alt="doc-icon"
          className="w-10 mr-4 "
          src="https://cdn-icons-png.flaticon.com/512/2869/2869812.png"
        />
        <span className="text-white">Patient</span>
      </h1>
      <Link className="text-2xl bg-emerald-600 rounded-lg m-2 py-2 px-4 flex flex-row justify-center items-center w-60">
        <img
          alt="doc-icon"
          className="w-10 mr-4 "
          src="https://cdn-icons-png.flaticon.com/512/6025/6025111.png"
        />
        <span className="text-white">Pharmacist</span>
      </Link>
    </div>
  );
};

export default Home;
