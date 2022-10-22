import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import TermsAndCondition from "../../Pages/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => fetch("http://localhost:5000/news"),
        element: <Home></Home>,
      },
      {
        path: "/news/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: <Category></Category>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/terms',
        element: <TermsAndCondition></TermsAndCondition>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ],
  },
]);