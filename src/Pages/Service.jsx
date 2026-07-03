import React from "react";
import assets from "../assets/assets";
import { FaCar, FaTools, FaKey, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { GiMechanicGarage } from "react-icons/gi";
import {
  Cpu,
  Gauge,
  Shield,
  Wrench,
  Laptop,
  Settings,
  Car,
  Lock,
} from "lucide-react";

import { SprayCan, Palette, Sparkles, Armchair } from "lucide-react";

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

const services = [
  {
    icon: <Cpu size={24} />,
    title: "ECU Programming & Repair",
    desc: "FBS 3 and FBS 4",
  },
  {
    icon: <Car size={24} />,
    title: "VGS",
    desc: "W203, W204, W211, W212, W221, W16, X164, W207, etc.",
  },
  {
    icon: <Settings size={24} />,
    title: "FTC & CVT",
    desc: "A Class, B Class, etc.",
  },

  {
    icon: <Cpu size={24} />,
    title: "9G Tronic",
    desc: "GLE, GLC, etc.",
  },
  {
    icon: <Cpu size={24} />,
    title: "ISM & DIS Programming",
    desc: "FBS 3 & FBS 4 • W166, W212, W205, etc.",
  },
  {
    icon: <Gauge size={24} />,
    title: "Mileage Calibration",
    desc: "W166, W205, W222, W164, W203, W211, etc.",
  },
  {
    icon: <Shield size={24} />,
    title: "Airbag Calibration & Repairs",
    desc: "FBS 3 and FBS 4",
  },

  {
    icon: <Laptop size={24} />,
    title: "SN Coding",
    desc: "Online Programming",
  },
];

const Service = () => {
  return (
    <div className="text-white">
      <section
        className="relative h-[400px] bg-cover bg-center bg-no-repeat py-20 text-center px-6"
        style={{ backgroundImage: `url(${assets.service})` }}
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

      <section className="bg-[#071633] py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[25px] md:text-4xl lg:text-4xl font-bold text-white mb-4">
              ECU Programming & Repair
            </h2>

            <p className="text-gray-300 mt-5 text-base md:text-lg leading-7">
              Dealer-level Mercedes-Benz programming, diagnostics and module
              repair using advanced equipment for accurate coding,
              synchronization and reliable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((item, index) => (
              <div
                key={index}
                className="group bg-[#0F1A2F] rounded-xl p-6 border border-white/5 hover:border-pryClr transition-all duration-300 hover:-translate-y-2  hover:shadow-pryClr/10 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-pryClr flex items-center justify-center text-white text-2xl mx-auto mb-5">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>

                {item.desc && (
                  <p className="text-gray-400 text-sm leading-6">{item.desc}</p>
                )}

                <div className="mt-6 h-1 w-10 bg-pryClr rounded-full mx-auto group-hover:w-20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
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

      <section className="relative overflow-hidden bg-[#081A38] py-24 px-6 md:px-10 lg:px-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full "></div>

          <img
            src={assets.service} // Wrapped sports car image
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[25px] md:text-4xl lg:text-5xl font-bold text-white mt-6">
              Car Wrapping & Protection
            </h2>

            <p className="text-gray-400 mt-6 text-lg leading-8">
              Transform your vehicle with premium vinyl wraps, ceramic tint,
              paint protection film and luxury detailing that keeps your car
              looking brand new.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5">
            <div className="lg:col-span-2 md:col-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br  from-white/10 to-white/5 backdrop-blur-xl p-6  transition-all duration-500 hover:-translate-y-3 hover:border-pryClr/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <h3 className="text-3xl text-center font-bold text-white mt-4">
                Luxury Vehicle Styling
              </h3>

              <p className="text-gray-400 text-sm text-center leading-6 mt-3">
                We specialize in premium vinyl wraps, ceramic tint, paint
                protection films, detailing and performance styling using
                industry-leading materials for a flawless finish.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6 ">
                {[
                  "Gloss • Matte • Satin",
                  "Chrome & Color Shift",
                  "Carbon Fiber Finish",
                  "Long-lasting Protection",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-2 text-sm text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-pryClr"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                icon: <Shield size={22} />,
                title: "PPF Protection",
                text: "Protection against scratches and stone chips.",
              },
              {
                icon: <SprayCan size={22} />,
                title: "Ceramic Tint",
                text: "Premium UV & heat rejection.",
              },
              {
                icon: <Car size={22} />,
                title: "Performance",
                text: "ECU tuning and upgrades.",
              },
              {
                icon: <Sparkles size={22} />,
                title: "Detailing",
                text: "Ceramic coating & deep cleaning.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:border-pryClr transition-all duration-300 flex items-center justify-center text-center transition-all duration-500 hover:-translate-y-3"
              >
                <div className=" flex flex-col items-center justify-center text-center">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pryClr to-orange-500 flex items-center justify-center text-center text-white mb-4">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2  r transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-6">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {[
              {
                number: "100+",
                label: "Wrap Colors",
              },
              {
                number: "5+",
                label: "Premium Finishes",
              },
              {
                number: "99%",
                label: "UV Protection",
              },
              {
                number: "100%",
                label: "Customer Satisfaction",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl py-8 text-center hover:border-pryClr transition"
              >
                <h2 className="text-4xl font-bold text-pryClr mb-2">
                  {item.number}
                </h2>

                <p className="text-gray-300">{item.label}</p>
              </div>
            ))}
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

      <section
        className="relative py-24 px-6 md:px-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assets.Chosse})` }}
      >
        <div className="absolute inset-0  backdrop-blur-sm"></div>

        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-14 tracking-tight">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-white/ border border-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/20 transition duration-300">
              <h3 className="text-xl font-bold mb-3">Experienced Team</h3>
              <p className="text-sm text-gray-200">
                Skilled mechanics with deep knowledge of all vehicle types,
                ensuring reliable and efficient service every time.
              </p>
            </div>

            <div className="bg-white/ border border-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/20 transition duration-300">
              <h3 className="text-xl font-bold mb-3">Quality Service</h3>
              <p className="text-sm text-gray-200">
                We use advanced tools and proven techniques to deliver
                high-quality repairs and long-lasting results.
              </p>
            </div>

            <div className="bg-white/  border border-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/20 transition duration-300">
              <h3 className="text-xl font-bold mb-3">Customer Satisfaction</h3>
              <p className="text-sm text-gray-200">
                Your satisfaction is our priority — we provide honest service
                you can trust and depend on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
