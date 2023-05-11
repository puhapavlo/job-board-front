import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import LoginForm from "../forms/LoginForn/LoginForm";
import RegisterForm from "../forms/RegisterForm/RegisterForm";
import Profile from "../pages/Profile/Profile";
import RecruiterRoute from "./Private/RecruiterRoute";
import AddJobForm from "../forms/AddJobForm/AddJobForm";
import Job from "../pages/Job/Job";
import JobSeekerRoute from "./Private/JobSeekerRoute";
import AddResumeForm from "../forms/AddResumeForm/AddResumeForm";
import Resume from "../pages/Resume/Resume";
import Jobs from "../pages/Jobs/Jobs";
import UpdateResumeForm
  from '../forms/AddResumeForm/UpdateResumeForm/UpdateResumeForm';
import UpdateJobForm from '../forms/AddJobForm/UpdateJobForm/UpdateJobForm';
import DeleteJobForm from '../forms/DeleteJobForm/DeleteJobForm';

const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route
            path="/job/add"
            element={
              <RecruiterRoute>
                <AddJobForm />
              </RecruiterRoute>
            }
        />
        <Route
            path="/job/update/:id"
            element={
              <RecruiterRoute>
                <UpdateJobForm />
              </RecruiterRoute>
            }
        />
        <Route path="/job/:id" element={<Job />} />
        <Route
            path="/resume/add"
            element={
              <JobSeekerRoute>
                <AddResumeForm />
              </JobSeekerRoute>
            }
        />
        <Route
            path="/resume/update/:id"
            element={
              <JobSeekerRoute>
                <UpdateResumeForm />
              </JobSeekerRoute>
            }
        />
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/resume/:id" element={<Resume />} />
      </Routes>
  );
};

export default Routing;