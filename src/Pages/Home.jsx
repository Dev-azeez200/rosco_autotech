import React from "react";
import assets from "../assets/assets";
import { Helmet } from "react-helmet-async";
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
    <>
      <div className="w-full overflow-hidden text-gray-800">
        <section
          className="relative lg:min-h-[90vh] min-h-[89vh] bg-cover bg-center flex items-center px-4 sm:px-6 md:px-10"
          style={{ backgroundImage: `url(${assets.Rosco})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-white w-full text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Rosco Autotech Reliable Auto Repairs Anytime, Anywhere.
            </h2>

            <p className="mt-4 text-sm sm:text-base font-semibold max-w-2xl mx-auto">
              AutoHub connects you with professional mechanics for fast,
              trusted, and affordable car repairs.
            </p>

            <div className="mt-6">
              <Link
                to="/BookService"
                className="px-6 sm:px-8 py-3 bg-pryClr text-white rounded-lg font-semibold shadow"
              >
                Book Service
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1c3d] text-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                <img
                  src={assets.Workers}
                  alt="Rosco Autotech Engineers"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3d]/70 via-transparent to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 sm:px-8 sm:py-6 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pryClr">
                  100%
                </h2>

                <p className="text-gray-200 text-sm sm:text-base font-medium mt-1 sm:mt-2 leading-relaxed">
                  Accuracy in Digital Diagnostics
                </p>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6">
                The Rosco Standard
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-7 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0">
                Founded on the principles of aerospace-grade precision, Rosco
                Autotech delivers exceptional automotive diagnostics, expert
                repairs, and customer-focused service. Every vehicle entrusted
                to us is handled with advanced technology, certified expertise,
                and an unwavering commitment to quality.
              </p>

              <div className="flex flex-wrap lg:flex justify-center  gap-3 sm:gap-4">
                <span className="flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:text-white transition duration-300">
                  <MdOutlineVerified className="text-pryClr text-lg sm:text-xl" />
                  <span className="font-semibold text-sm sm:text-base tracking-wide">
                    EXPERIENCE
                  </span>
                </span>

                <span className="flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:text-white transition duration-300">
                  <GiStarMedal className="text-pryClr text-lg sm:text-xl" />
                  <span className="font-semibold text-sm sm:text-base tracking-wide">
                    CERTIFIED
                  </span>
                </span>

                <span className="flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:text-white transition duration-300">
                  <FaHandshake className="text-pryClr text-lg sm:text-xl" />
                  <span className="font-semibold text-sm sm:text-base tracking-wide">
                    TRUSTED
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="bg-[#081A38] py-16 px-4 sm:px-6 md:px-12"
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
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1c3d] backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-3 hover:border-pryClr/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                >
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-pryClr via-white to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

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

        <section className="bg-[#081A38] py-16 px-4 sm:px-6 md:px-12 text-white">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              Delivering trusted automotive engineering services with measurable
              results and customer satisfaction.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center transition-all duration-500 hover:border-pryClr hover:-translate-y-2 "
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-pryClr mb-3">
                  {item.number}
                </h2>

                <div className="w-12 h-1 bg-pryClr rounded-full mx-auto mb-4 group-hover:w-20 transition-all duration-300"></div>

                <p className="text-gray-300 text-base font-medium capitalize">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
