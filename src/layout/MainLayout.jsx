import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import Home from "../pages/Home/Home";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Home></Home> */}

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
