import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./navigation/navigation";
import Community from "./community/community";
import Opportunities from "./community/opportunities";
import PodcastPage from "./community/podcasts";
import Signin from "./signin/signin";
import SignUp from "./signup/signup";
import User from "./user/user";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/community" element={<Community />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/podcasts" element={<PodcastPage />} />
          <Route path="/signIn" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
