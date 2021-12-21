import { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// pages
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ErrorPage = lazy(() => import("./pages/ErrorPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/404NotFoundPage.jsx"));


const Layout = () => {
  return (
    <div className="p-2">
      <Outlet />
    </div>
  )
}


const App = () => {
  return (
    <div className="App overflow-hidden">
      <Suspense fallback={<div className="m-3">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="error" element={<ErrorPage />} />
            <Route path="*" element={<NotFoundPage />} />

          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
