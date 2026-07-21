import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BookingForm = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();
  const [diagnosis, setDiagnosis] = useState(null);

  const validationSchema = Yup.object({
    vehicle: Yup.string()
      .min(8, "Vehicle name is too short")
      .required("Vehicle is required"),

    date: Yup.string().required("Please select a date"),

    name: Yup.string()
      .min(6, "Name must be at least 3 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    message: Yup.string()
      .min(10, "Please provide more details")
      .required("Message is required"),
  });

  const detectIssue = (message) => {
    const text = message.toLowerCase();

    if (
      text.includes("engine") ||
      text.includes("smoke") ||
      text.includes("misfire")
    ) {
      return {
        issue: "Possible Engine Fault",
        code: "P0301",
        recommendation:
          "Inspect spark plugs, ignition coils and fuel injectors.",
      };
    }

    if (
      text.includes("battery") ||
      text.includes("won't start") ||
      text.includes("starting")
    ) {
      return {
        issue: "Battery or Charging System Problem",
        code: "B1101",
        recommendation: "Check battery health, alternator and charging system.",
      };
    }

    if (text.includes("brake") || text.includes("abs")) {
      return {
        issue: "Brake System Warning",
        code: "C0035",
        recommendation: "Inspect brake pads, brake fluid and ABS sensors.",
      };
    }

    if (text.includes("oil") || text.includes("leak")) {
      return {
        issue: "Oil System Issue",
        code: "P0520",
        recommendation: "Inspect engine oil level and possible leaks.",
      };
    }

    return {
      issue: "Full Vehicle Inspection Required",
      code: "N/A",
      recommendation: "Perform complete system diagnostics.",
    };
  };

  const formik = useFormik({
    initialValues: {
      service: "Full System Diagnostics",
      vehicle: "",
      date: "",
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (!selectedTime) {
        alert("Please select a preferred time.");
        return;
      }

      const result = detectIssue(values.message);
      setDiagnosis(result);

      const phoneNumber = "2348103007867";
      const text = `
*New Booking Request*

Service: ${values.service}
Vehicle: ${values.vehicle}
Date: ${values.date}
Time: ${selectedTime}

Name: ${values.name}
Email: ${values.email}

Customer Complaint:
${values.message}

Possible Diagnosis:
Issue: ${result.issue}
Error Code: ${result.code}

Recommendation:
${result.recommendation}
`;

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");

      resetForm();
      setSelectedTime("");
    },
  });

  const timeSlots = ["09:00", "11:00", "14:00", "16:00"];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0b1424] to-[#0f1f3d] p-6 text-white">
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
                className="w-full mt-2 p-3 rounded-xl bg-[#0b1424] border border-white/10 outline-none"
              >
                <option>Full System Diagnostics</option>
                <option>Engine Repair</option>
                <option>Oil Change</option>
                <option>Brake System Repair</option>
                <option>Battery Replacement</option>
                <option>Transmission Repair</option>
                <option>Suspension Repair</option>
                <option>Wheel Alignment</option>
                <option>AC Repair & Servicing</option>
                <option>Electrical System Repair</option>
                <option>Tyre Replacement</option>
                <option>Car Inspection</option>
                <option>Fuel System Repair</option>
                <option>Radiator & Cooling System Repair</option>
                <option>Check Engine Light Diagnosis</option>
                <option>Vehicle Maintenance Service</option>
                <option>Emergency Roadside Assistance</option>
              </select>
            </div>

            {/* Vehicle */}
            <div className="mb-5">
              <label className="text-sm text-gray-400">Vehicle</label>

              <input
                type="text"
                name="vehicle"
                placeholder="e.g. 2023 Porsche 911"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vehicle}
                className={`w-full mt-2 p-3 rounded-xl bg-[#0b1424] border outline-none ${
                  formik.touched.vehicle && formik.errors.vehicle
                    ? "border-red-500"
                    : "border-white/10 focus:border-pryClr"
                }`}
              />

              {formik.touched.vehicle && formik.errors.vehicle && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.vehicle}
                </p>
              )}
            </div>

            {/* Date */}
            <div className="mb-5">
              <label className="text-sm text-gray-400">Preferred Date</label>

              <input
                type="date"
                name="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
                className={`w-full mt-2 p-3 rounded-xl bg-[#0b1424] border outline-none ${
                  formik.touched.date && formik.errors.date
                    ? "border-red-500"
                    : "border-white/10 focus:border-pryClr"
                }`}
              />

              {formik.touched.date && formik.errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.date}
                </p>
              )}
            </div>

            {/* Time Slots */}
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

            {!selectedTime && (
              <p className="text-gray-400 text-sm">Select a preferred time.</p>
            )}
          </div>

          {/* Client Information */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Client Information</h2>

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`w-full mb-1 p-3 rounded-xl bg-[#0b1424] border outline-none ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-white/10 focus:border-pryClr"
              }`}
            />

            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mb-4">{formik.errors.name}</p>
            )}

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full mb-1 p-3 rounded-xl bg-[#0b1424] border outline-none ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-white/10 focus:border-pryClr"
              }`}
            />

            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mb-4">{formik.errors.email}</p>
            )}

            {/* Message */}
            <textarea
              name="message"
              placeholder="Describe any specific issues..."
              rows="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`w-full p-3 rounded-xl bg-[#0b1424] border outline-none mb-1 ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-white/10 focus:border-pryClr"
              }`}
            />

            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm mb-4">
                {formik.errors.message}
              </p>
            )}

            {diagnosis && (
              <div className="mb-5 p-4 rounded-xl bg-[#08111f] border border-white/10">
                <h3 className="font-semibold mb-3 text-pryClr">
                  Diagnostic Result
                </h3>

                <p>
                  <strong>Issue:</strong> {diagnosis.issue}
                </p>

                <p>
                  <strong>Error Code:</strong> {diagnosis.code}
                </p>

                <p>
                  <strong>Recommendation:</strong> {diagnosis.recommendation}
                </p>
              </div>
            )}

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
