import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> {/* This is where nested routes will be rendered */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Body />} /> {/* Default route for "/" */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} /> {/* Catch-all for undefined routes */}
      </Routes>
    </Router>
  );
};

export default App;
