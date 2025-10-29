import { Outlet } from "react-router-dom";
import Navbar from "@/layout/nav/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
