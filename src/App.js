import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorLogin from "./components/Login";
import DoctorDashboard, {
  PatientListTable,
} from "./components/Doctor-dashboard";
import PatientRegister from "./components/PatientRegister";
import NewDoctorSignup from "./components/NewDoctorSignup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/doctor-login",
    element: <DoctorLogin />,
  },
  {
    path: "/doctor-sign-up",
    element: <NewDoctorSignup />,
  },
  {
    path: "/doctor-dashboard",
    element: <DoctorDashboard />,
    children: [
      {
        path: "home",
        element: <PatientListTable />,
      },
      {
        path: "register-patient",
        element: <PatientRegister />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
