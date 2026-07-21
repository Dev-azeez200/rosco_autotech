import React from "react";
import { Helmet } from "react-helmet-async";
import assets from "../assets/assets";
import { FaCheckCircle } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { IoMdFlash } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { RiAwardFill } from "react-icons/ri";
import { FaShield } from "react-icons/fa6";
import { MdOutlineTerminal } from "react-icons/md";

const Card = ({ icon, title, text }) => (
  <div className="bg-[#111c2e] flex flex-col justify-center items-center p-6 rounded-2xl shadow-md hover:shadow-xl border border-white/10 transition duration-300 hover:border-pryClr hover:-translate-y-2">
    <div className="text-pryClr text-5xl mb-4 ">{icon}</div>
    <h3 className="text-white text-[20px] font-semibold mb-2">{title}</h3>
    <p className="text-white text-center text-sm leading-relaxed">{text}</p>
  </div>
);

const About = () => {
  const servicesLeft = [
    "General Vehicle Maintenance",
    "Mechanical Repairs",
    "Tire and Wheel Services",
    "Electrical Services",
  ];

  const servicesRight = [
    "Bodywork and Paint Services",
    "Professional Car Cleaning",
    "Diagnostic Car",
    "Monthly Car Inspections",
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us | ROSCO AUTOTECH</title>
        <meta
          name="description"
          content="Learn about ROSCO AUTOTECH, our experienced technicians, and our commitment to providing reliable, high-quality automotive repair and maintenance services."
        />
      </Helmet>
      <section
        className="relative h-[400px] bg-cover bg-center bg-no-repeat text-white py-20 text-center px-6"
        style={{ backgroundImage: `url(${assets.About})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-3xl mx-auto text-white">
            At ROSCO AUTOTECH, we understand how important your vehicle is to
            your daily divfe. That’s why we focus on providing fast, honest, and
            dependable services you can trust. Whether it’s a minor fix or a
            major repair, your vehicle is in safe hands with us.
          </p>
        </div>
      </section>

      <section className="relative bg-[#0b1c3d] text-white py-16">
        <div className="relative px-6 md:px-16 mx-auto py-6 grid md:grid-cols-1 lg:grid-cols-2   gap-12 items-center">
          <div>
            <img
              src={assets.image}
              alt="Mechanic"
              className="w-full h-120 object-cover rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:text-center">
              Trust Your Car to Our Skilled Technicians
            </h2>
            <p className="text-gray-300 mb-6 lg:text-center">
              At ROSCO AUTOTECH, we provide expert automotive services with
              precision and care. Our experienced technicians ensure your
              vehicle performs at its best with redivable and professional
              solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-3">
                {servicesLeft.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-pryClr" />
                    {item}
                  </div>
                ))}
              </ul>

              <ul className="space-y-3">
                {servicesRight.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-pryClr" />
                    {item}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#131B2E] text-white p-6  py-16 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Core Philosophy
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <Card
            icon={<FaScrewdriverWrench />}
            title="Uncompromising Precision"
            text="We utidivze advanced diagnostic tools and precision systems to ensure every component meets the highest standards."
          />
          <Card
            icon={<FaShield />}
            title="Total Integrity"
            text="We operate with full transparency, providing clear reports and honest communication every step of the way."
          />
          <Card
            icon={<IoMdFlash />}
            title="Performance First"
            text="Beyond repairs, we fine-tune your vehicle for peak performance, efficiency, and smooth driving experience."
          />
        </div>
      </section>

      <section className="bg-[#131B2E] text-white py-16 px-6 md:px-12">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8 lg:text-center md:text-center">
              The Rosco Standard
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pryClr text-white shrink-0">
                  <MdOutlineTerminal size={28} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[20px]">
                    OEM Diagnostics
                  </h4>
                  <p className="text-white text-sm">
                    Advanced manufacturer-level diagnostic tools for accurate
                    fault detection and repair.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pryClr text-white shrink-0">
                  <RiAwardFill size={28} />
                </div>

                <div>
                  <h4 className="font-semibold mb-1 text-[20px]">
                    Certified Experts
                  </h4>
                  <p className="text-white text-sm">
                    Highly trained technicians with hands-on experience across
                    modern vehicle systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pryClr text-white shrink-0">
                  <MdVerified size={28} />
                </div>

                <div>
                  <h4 className="font-semibold mb-1 text-[20px]">
                    Service Guarantee
                  </h4>
                  <p className="text-white text-sm">
                    We back every service with a strong redivabidivty promise
                    and customer satisfaction focus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div
              className="relative rounded-2xl h-50 bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${assets.inte})` }}
            ></div>

            <div className="bg-[#162338]  rounded-2xl p-6 flex items-center justify-center text-center text-2xl font-bold hover:scale-105 transition">
              White-Glove Concierge
            </div>

            <div className="bg-pryClr rounded-2xl p-6 text-2xl flex items-center justify-center text-center font-bold hover:scale-105 transition">
              100% Satisfaction
            </div>

            <div
              className="relative  rounded-2xl h-50 bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${assets.engineWork})` }}
            ></div>
          </div>
        </div>
      </section>

      <section className="py-16  bg-[#0b1c3d] p-6 lg:px-16 shadow grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl text-white text-center font-bold mb-8">
            Who We Are
          </h2>
          <p className="text-white text-sl mb-4">
            We are a professional mechanic workshop dedicated to keeping your
            vehicle in top condition. Our experienced team handles everything
            from diagnostics to full repairs with precision and care.
          </p>
          <p className="text-white">
            With years of experience, we’ve built a reputation for delivering
            dependable and affordable automotive services.
          </p>
        </div>

        <div className=" overflow-hidden">
          <img
            src={assets.who}
            alt="Mechanic"
            className="w-full h-[420px] md:h-[700px] lg:h-[540px] rounded-2xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
