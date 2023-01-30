import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  /*creating path for different pages */
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
        <Footer />
      </div>
    ), //it will show the home page
  },
  {
    path: "/login",
    element: <Login />, //it will show the login page, we don't need navbar and footer
  },
  {
    path: "/register",
    element: <Register />, //it will show the register page,we don't need navbar and footer
  },
  {
    path: "/blogs/:id",
    element: (
      <div>
        <NavBar />
        <Single />
        <Footer />
      </div>
    ), //it will show the blog (only one at a time i.e after read more ) page
  },
  {
    path: "/write",
    element: (
      <div>
        <NavBar />
        <Write />
        <Footer />
      </div>
    ), //it will show the write page
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />{" "}
      </div>
    </div>
  );
}

export default App;
