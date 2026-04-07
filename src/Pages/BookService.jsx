import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BookingForm = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      service: "Full System Diagnostics",
      vehicle: "",
      date: "",
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      const phoneNumber = "2348103007867";

      const text = `
 *New Booking Request*

 Service: ${values.service}
 Vehicle: ${values.vehicle}
 Date: ${values.date}
 Time: ${selectedTime}

 Name: ${values.name}
 Email: ${values.email}

 Issue:
${values.message}
      `;

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        text,
      )}`;

      window.open(url, "_blank");
    },
  });

  const timeSlots = ["09:00", "11:00", "14:00", "16:00"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1424] to-[#0f1f3d] p-6 text-white">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mb-6 text-gray-300 hover:text-white transition"
      >
        <FaArrowLeft />
        Back to Home
      </button>

      <div className="flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 grid md:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-xl font-semibold mb-6">Service Details</h2>

            <div className="mb-5">
              <label className="text-sm text-gray-400">Select Service</label>
              <select
                name="service"
                onChange={formik.handleChange}
                value={formik.values.service}
                className="w-full mt-2 p-3 rounded-xl bg-[#0b1424] border border-white/10 focus:border-pryClr outline-none"
              >
                <option>Full System Diagnostics</option>
                <option>Engine Repair</option>
                <option>Oil Change</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="text-sm text-gray-400">Vehicle</label>
              <input
                type="text"
                name="vehicle"
                placeholder="e.g. 2023 Porsche 911"
                onChange={formik.handleChange}
                value={formik.values.vehicle}
                className="w-full mt-2 p-3 rounded-xl bg-[#0b1424] border border-white/10 focus:border-pryClr outline-none"
              />
            </div>

            <div className="mb-5">
              <label className="text-sm text-gray-400">Preferred Date</label>
              <input
                type="date"
                name="date"
                onChange={formik.handleChange}
                value={formik.values.date}
                className="w-full mt-2 p-3 rounded-xl bg-[#0b1424] border border-white/10 focus:border-pryClr outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {timeSlots.map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-5 py-2 rounded-lg text-sm transition ${
                    selectedTime === time
                      ? "bg-pryClr"
                      : "bg-[#0b1424] hover:bg-pryClr"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">Client Information</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full mb-4 p-3 rounded-xl bg-[#0b1424] border border-white/10 focus:border-pryClr outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full mb-4 p-3 rounded-xl bg-[#0b1424] border border-white/10 focus:border-pryClr outline-none"
            />

            <textarea
              name="message"
              placeholder="Describe any specific issues..."
              rows="4"
              onChange={formik.handleChange}
              value={formik.values.message}
              className="w-full p-3 rounded-xl bg-[#0b1424] border border-white/10 focus:border-pryClr outline-none mb-6"
            />

            <button
              type="submit"
              className="w-full bg-pryClr hover:bg-gray-500 cursor-pointer transition py-3 rounded-lg font-semibold text-lg shadow-lg"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
