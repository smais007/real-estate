import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import UserAvarta from "../components/UserProfile/UserAvarta";
// import Home from "../pages/Home/Home";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      {/* <UserAvarta></UserAvarta> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
