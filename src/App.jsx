import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/mainlayout";
import { Toaster } from "sonner";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import BookService from "./Pages/BookService";

const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <>
      <Toaster />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout child={<Home />} />} />
          <Route path="/about" element={<MainLayout child={<About />} />} />
          <Route path="/service" element={<MainLayout child={<Service />} />} />
          <Route path="/contact" element={<MainLayout child={<Contact />} />} />
          <Route path="/BookService" element={<MainLayout child={<BookService />} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
