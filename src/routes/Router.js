import { element } from "prop-types";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import PermissionForm from "../views/PermissionForm.js";
import EmployeeList from "../views/EmployeeList"
import AddEmployee from "../views/AddEmployee"
import Roles from "../views/Roles/Roles"
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const About = lazy(() => import("../views/About.js"));
const Form = lazy(() => import("../views/ui/Forms.js"));
const Starter = lazy(() => import("../views/Starter.js"));
const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/Dashboard", exact: true, element: <About value="Dashboard" /> },
      { path: "/Policy", exact: true, element: <Form /> },
      {
        path: "/AssignProject",
        exact: true,
        element: <About value="Assigne Project" />,
      },
      { path: "/Addlog", exact: true, element: <About value="Add log" /> },
      {
        path: "/Deletelog",
        exact: true,
        element: <About value="Delete log" />,
      },
      { path: "/Editlog", exact: true, element: <About value="Edit log" /> },
      {
        path: "/Editedlog",
        exact: true,
        element: <About value="Edited log" />,
      },
      { path: "/Leave", exact: true, element: <About value="Leave" /> },
      {
        path: "/Leavelist",
        exact: true,
        element: <About value="Leave list" />,
      },
      {
        path: "/Leavebalance",
        exact: true,
        element: <About value="Leave balance" />,
      },
      {
        path: "/Addemployee",
        exact: true,
        element: <AddEmployee/>,
      },
      {
        path: "/Monthlyattendance",
        exact: true,
        element: <About value="Monthly attendance" />,
      },
      {
        path: "/Attendancedetailsall",
        exact: true,
        element: <About value="Attendance details all" />,
      },
      {
        path: "/Employeelist",
        exact: true,
        element: <EmployeeList/>,
      },
      {
        path: "/Editprofile",
        exact: true,
        element: <About value="Edit profile" />,
      },
      {
        path: "/Attendancedetails",
        exact: true,
        element: <About value="Attendance details" />,
      },
      {
        path: "/PermissionForm",
        exact: true,
        element: <PermissionForm/>,
      },
      {
        path: "/Roles",
        exact: true,
        element: <Roles/>,
      },
    ],
  },
];

export default ThemeRoutes;