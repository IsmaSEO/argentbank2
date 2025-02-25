import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import UserProfil from "./pages/UserProfil/UserProfil";

const AppRouter = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/profile", element: <UserProfil /> },
    { path: "/not-found", element: <NotFound /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRouter;
