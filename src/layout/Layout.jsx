import { Outlet } from "react-router-dom";
import Navbar from "./nav/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
