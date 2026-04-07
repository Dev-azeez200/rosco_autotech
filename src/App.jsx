import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
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
      <Routes>
        <Route>
          <Route path="/" element={<MainLayout child={<Home />} />} />
          <Route path="/about" element={<MainLayout child={<About />} />} />
          <Route path="/service" element={<MainLayout child={<Service />} />} />
          <Route path="/contact" element={<MainLayout child={<Contact />} />} />
        </Route>
        <Route path="/bookservice" element={<BookService />} />
      </Routes>
    </>
  );
}

export default App;
