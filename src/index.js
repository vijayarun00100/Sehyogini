import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from "./community/community";
import Opportunities from "./community/opportunities";
import PodcastPage from "./community/podcasts";
import Signin from "./signin/signin";
import SignUp from "./signup/signup";
import User from "./user/user";
import Landing from "./landing/landing";
import Jobs from "./jobs/jobs";
import "./App.css";
import "./user/user";

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
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);