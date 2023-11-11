import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import App from "../App";
import Home from "../modules/Home/Home";
import About from "../modules/About/About";
import Project from "../modules/Project/Project";
import Contact from "../modules/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: routes.default,
    element: <App />,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.about,
        element: <About />,
      },
      {
        path: routes.projects,
        element: <Project />,
      },
      {
        path: routes.contact,
        element: <Contact />,
      },
    ],
  },
]);
