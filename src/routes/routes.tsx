import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookDetails from "../pages/book-details";
import BookEdit from "../pages/book-edit";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/not-found";
import Signup from "../pages/signup";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  // {
  //   path: "/books",
  //   element: <Books />,
  // },
  {
    path: "/details/:id",
    element: <BookDetails />,
  },
  {
    path: "/edit/:id",
    element: <BookEdit />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
