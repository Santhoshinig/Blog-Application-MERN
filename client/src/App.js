import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./UI/Layout";
import HeadingBox from "./UI/HeadingBox";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";

const LogIn = React.lazy(() => import("./pages/LogIn/LogIn"));
const SignUp = React.lazy(() => import("./pages/SignUp/Signup"));
const SinglePage = React.lazy(() => import("./pages/SinglePage/SinglePage"));
const Write = React.lazy(() => import("./pages/Write/Write"));
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/signin" element={<LogIn />} />

          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/home"
            element={
              <>
                <HeadingBox />
                <Home />
              </>
            }
          />

          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/home/post/:postId" element={<SinglePage />} />

          <Route path="/write" element={<Write />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
