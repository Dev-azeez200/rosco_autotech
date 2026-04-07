import React from "react";
import assets from "../assets/assets";
import { FaCar, FaTools, FaKey, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { GiMechanicGarage } from "react-icons/gi";

const Card = ({ number, icon, title, text }) => (
  <div className="relative bg-[#111c2e] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
    <span className="absolute top-4 right-6 text-white text-5xl font-bold opacity-20 ">
      {number}
    </span>
    <div className="text-white text-center mb-4 flex items-center">{icon}</div>
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-white text-sm mb-4">{text}</p>
  </div>
);

const Service = () => {
  return (
    <div className="text-white">
      <section
        className="relative h-[400px] bg-cover bg-center bg-no-repeat py-20 text-center px-6"
        style={{ backgroundImage: `url(${assets.auto})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"> Our Services</h1>
          <p className="max-w-3xl mx-auto">
            At ROSCO AUTOTECH, we offer a wide range of professional auto repair
            and maintenance services designed to keep your vehicle running at
            peak performance. From advanced diagnostics to engine repairs, key
            programming, and on-site mobile services, our expert team is
            committed to delivering fast, reliable, and high-quality solutions
            you can trust.
          </p>
        </div>
      </section>

      <section className="grid bg-[#0b1424] py-16 px-6 md:px-12 lg:px-16 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          number="01"
          icon={<MdOutlineAnalytics size={28} />}
          title="Car Diagnostics"
          text="OEM-level scanning tools, live data streaming, and advanced diagnostics protocols."
          link="Explore Telemetry"
        />
        <Card
          number="02"
          icon={<GiMechanicGarage size={28} />}
          title="Engine Repair"
          text="From cylinder head machining to timing belt synchronization and full rebuilds."
          link="Performance Specs"
        />
        <Card
          number="03"
          icon={<FaKey size={28} />}
          title="Key Programming"
          text="Precision coding for modern transponder keys, smart remotes, and immobilizer systems."
          link="Security Systems"
        />
        <Card
          number="04"
          icon={<FaMapMarkerAlt size={28} />}
          title="GPS Tracking"
          text="Advanced asset tracking and real-time vehicle monitoring systems."
          link="Live Tracking"
        />
        <Card
          number="05"
          icon={<FaTools size={28} />}
          title="General Repairs"
          text="Suspension tuning, brake system optimization, and drivetrain maintenance."
          link="Full Catalog"
        />
        <Card
          number="06"
          icon={<FaCar size={28} />}
          title="Mobile Mechanic"
          text="On-site diagnostics and repair services delivered directly to your location."
          link="Request On-Site"
        />
      </section>

      <section
        className="relative py-24 px-6 md:px-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assets.auto})` }}
      >
        <div className="absolute inset-0 bg-[#131b2ec4] backdrop-blur-sm"></div>

        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-14 tracking-tight">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/20 transition duration-300">
              <h3 className="text-xl font-bold mb-3">Experienced Team</h3>
              <p className="text-sm text-gray-200">
                Skilled mechanics with deep knowledge of all vehicle types,
                ensuring reliable and efficient service every time.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/20 transition duration-300">
              <h3 className="text-xl font-bold mb-3">Quality Service</h3>
              <p className="text-sm text-gray-200">
                We use advanced tools and proven techniques to deliver
                high-quality repairs and long-lasting results.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/20 transition duration-300">
              <h3 className="text-xl font-bold mb-3">Customer Satisfaction</h3>
              <p className="text-sm text-gray-200">
                Your satisfaction is our priority — we provide honest service
                you can trust and depend on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#131B2E] py-20 px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">How It Works</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-1 gap-8">
          <div className="relative bg-[#0b1424] p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-pryClr text-white text-lg font-bold">
              01
            </div>

            <h3 className="text-xl font-semibold mb-3">Book Service</h3>
            <p className="text-gray-400 text-sm">
              Schedule an appointment or request a mobile mechanic at your
              convenience.
            </p>
          </div>

          <div className="relative bg-[#0b1424] p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-pryClr text-white text-lg font-bold">
              02
            </div>

            <h3 className="text-xl font-semibold mb-3">Diagnostics</h3>
            <p className="text-gray-400 text-sm">
              We inspect your vehicle using advanced diagnostic tools to detect
              issues.
            </p>
          </div>

          <div className="relative bg-[#0b1424]  p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-pryClr text-white text-lg font-bold">
              03
            </div>

            <h3 className="text-xl font-semibold mb-3">Repair & Deliver</h3>
            <p className="text-gray-400 text-sm">
              We fix the issue and get your vehicle back on the road safely and
              quickly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
