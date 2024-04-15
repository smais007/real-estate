import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Login from "../pages/LoginPage/Login";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Details from "../components/EstateDetails/Details";
import ContactPage from "../pages/ContactPage/ContactPage";
import PrivateRoutes from "./PrivateRoutes";
import ViewProfile from "../components/UserProfile/ViewProfile";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import BlogPage from "../pages/BlogPage/BlogPage";
import AboutUs from "../pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/card.json"),
      },
      {
        path: "/properties/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: () => fetch("/card.json"),
      },
      {
        path: "/view-profile",
        element: (
          <PrivateRoutes>
            <ViewProfile></ViewProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: '/blog',
        element:<BlogPage></BlogPage>
      },
      {
        path: '/about',
        element:<AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);
