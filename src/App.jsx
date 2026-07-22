import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/mainlayout";
import { Toaster } from "sonner";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import BookService from "./Pages/BookService";
import assets from "./assets/assets";

const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <>
      <Toaster />
      <Suspense
        fallback={
          <div className="fixed inset-0 bg-[#0b1c3d] flex items-center justify-center z-[9999]">
            <div className="relative w-[340px] rounded-3xl bg-rosco2 backdrop-blur-xl border border-white/10 shadow-2xl p-8">
              <div className="relative flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-white blur-2xl animate-pulse"></div>

                  <img
                    src={assets.RoscoLogo1}
                    alt="ROSCO AUTOTECH"
                    className="relative w-35 h-35 object-contain animate-pulse"
                  />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white tracking-wide">
                  ROSCO AUTOTECH
                </h2>

                <div className="flex justify-center">
                  <svg
                    className="animate-spin h-12 w-12 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z"
                    />
                  </svg>
                </div>

                <p className="text-gray-400 text-sm mt-1 text-center">
                  Reliable Auto Repairs Anytime, Anywhere
                </p>
              </div>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<MainLayout child={<Home />} />} />
          <Route path="/about" element={<MainLayout child={<About />} />} />
          <Route path="/service" element={<MainLayout child={<Service />} />} />
          <Route path="/contact" element={<MainLayout child={<Contact />} />} />
          <Route
            path="/BookService"
            element={<MainLayout child={<BookService />} />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
