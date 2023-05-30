import React from "react";
import './index.css'
// import Payments from "./components/Payments.jsx";
import ParentComp from "./components/ParentComp/ParentComp.jsx";
import FavoritesPage from "./components/ParentComp/FavoritesPage.jsx";
import "./index.css";
import Footer from "./components/Footer/Footer.js";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import {Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";
import { useEffect, useState } from "react";
import ForceRedirect from "./components/ForceRedirect";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetData } from './redux/actions/resetData.js';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetData());
    };
  }, [location.pathname]);
  const [isConnected, setIsconnected] = useState(false);
  // const user =  JSON.parse(localStorage.getItem('user'))._id

  const checkUserToken = () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user-token"));
      // const username = JSON.parse(localStorage.getItem("user-token")).name;
      if (user) {
        setIsconnected(true);
      } else {
        setIsconnected(false);
      }
    }
  };
  useEffect(() => {
    checkUserToken();
  }, [isConnected]);

  const Logout = () => {
    if (localStorage.getItem("user-token")) {
      localStorage.clear();
      setIsconnected(false);
    }
  };

  return (
    <div className="">
      <Navbar Logout={Logout} user={isConnected} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={isConnected}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ForceRedirect user={isConnected}>
              <Signin />
            </ForceRedirect>
          }
        />
        <Route
          path="/signup"
          element={
            <ForceRedirect user={isConnected}>
              <Signup />
            </ForceRedirect>
          }
        />
        <Route path="*" element={<NotFound />} />
        {/* Maaz Routes */}
        {/* <Route path="/payments" element={<Payments />} /> */}
        <Route path="/home" element={<ParentComp />} />
        <Route path="/favorites" element={<NotFound />} />
        <Route path="/docs/:username" element={<FavoritesPage />} />

        {/* ================== */}
      </Routes>


    </div>
  );
}

export default App;


// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { resetData } from './actions';

// function PageA() {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     return () => {
//       dispatch(resetData());
//     };
//   }, [location.pathname]);

//   // rest of your component code
// }