import React from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaWrench,
  FaCar,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaLocationDot, FaMoneyBills } from "react-icons/fa6";
import { GiCarKey, GiStarMedal } from "react-icons/gi";
import { MdOutlineVerified } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

const Home = () => {
  const stats = [
    { number: "30+", label: "years of experience" },
    { number: "400+", label: "happy clients" },
    { number: "900+", label: "repaired cars" },
  ];

  const features = [
    {
      icon: <FaWrench size={24} />,
      title: "Expert Technicians",
      description: "Master mechanics with decades of specialized experience.",
    },
    {
      icon: <FaBolt size={24} />,
      title: "Fast Turnaround",
      description: "Streamlined logistics and efficient diagnostic workflows.",
    },
    {
      icon: <FaMoneyBills size={24} />,
      title: "Affordable Pricing",
      description:
        "Transparent, competitive rates without compromising quality.",
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: "Trusted Service",
      description: "Integrity-driven advice and comprehensive warranties.",
    },
  ];

  return (
    <div className="w-full overflow-hidden text-gray-800">
      <section
        className="relative lg:min-h-[90vh] min-h-[89vh] bg-cover bg-center flex items-center px-4 sm:px-6 md:px-10"
        style={{ backgroundImage: `url(${assets.auto})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-rosco2 to-transparent"></div>

        <div className="relative max-w-5xl mx-auto text-white w-full text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Rosco Autotech Reliable Auto Repairs Anytime, Anywhere.
          </h2>

          <p className="mt-4 text-sm sm:text-base font-semibold max-w-2xl mx-auto">
            AutoHub connects you with professional mechanics for fast, trusted,
            and affordable car repairs.
          </p>

          <div className="mt-6">
            <Link
              to={"/BookService"}
              className="px-6 sm:px-8 py-3 bg-pryClr text-white rounded-lg font-semibold shadow"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1c3d] text-white py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-10  items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-black">
              <img
                src={assets.engine1}
                alt="Engine"
                className="w-full object-contain"
              />
            </div>

            <div className="absolute bottom-[-30px] left-4 sm:left-6 bg-[#1e2f52] rounded-2xl px-5 sm:px-8 py-4 sm:py-6 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold">100%</h2>
              <p className="text-sm sm:text-base font-bold text-gray-300 mt-1">
                Accuracy in Digital Diagnostics
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl md:text-center md:mt-20 font-bold mb-6">
              The Rosco Standard
            </h2>

            <p className="leading-relaxed mb-6 text-sm sm:text-base font-semibold md:text-center">
              Founded on the principles of aerospace-grade precision, Rosco
              Autotech redefines the service experience.
            </p>

            <div className="flex flex-wrap gap-3 md:justify-center">
              <span className="bg-[#162544] px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 md:text-lg md:p-2 lg:p-2">
                <MdOutlineVerified className="text-pryClr" />
                EXPERIENCE
              </span>
              <span className="bg-[#162544] px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 md:text-lg md:p-2 lg:p-2">
                <GiStarMedal className="text-pryClr" />
                CERTIFIED
              </span>
              <span className="bg-[#162544] px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 md:text-lg md:p-2 lg:p-2">
                <FaHandshake className="text-pryClr" />
                TRUSTED
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-[#131B2E] py-16 px-4 sm:px-6 md:px-12"
      >
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10">
            Core Competencies
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {[
              {
                icon: <FaCar />,
                title: "Car Diagnostics",
                text: "Quick and accurate diagnostics to keep your car in top condition",
              },
              {
                icon: <FaWrench />,
                title: "Engine Repair",
                text: "Comprehensive vehicle repair services",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Mobile Mechanic",
                text: "On-site car repairs at your convenience.",
              },
              {
                icon: <IoSettingsSharp />,
                title: "Engine Repair",
                text: "Expert engine diagnostics and repairs.",
              },
              {
                icon: <FaLocationDot />,
                title: "GPS Tracking",
                text: "Real-time vehicle tracking for safety.",
              },
              {
                icon: <GiCarKey />,
                title: "Key Programming",
                text: "Fast and secure car key programming.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#171F33] p-6 rounded-2xl hover:shadow-lg transition hover:scale-105  duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-pryClr text-white">
                  {service.icon}
                </div>

                <h4 className="text-lg font-semibold text-white">
                  {service.title}
                </h4>

                <p className="text-sm text-gray-300 mt-2 md:text-lg">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1C3D] text-white py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-white/10 mb-3">
                {feature.icon}
              </div>

              <h3 className="text-base font-semibold">{feature.title}</h3>

              <p className="text-sm text-gray-300 mt-2 md:text- xl">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#131B2E] py-16 px-4 sm:px-6 md:px-12 text-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-3xl sm:text-4xl font-bold text-pryClr">
                {item.number}
              </h2>
              <p className="mt-2 text-sm sm:text-base capitalize">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
