import React from "react";
import { Helmet } from "react-helmet-async";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    subject: Yup.string()
      .min(5, "Subject must be at least 5 characters")
      .required("Subject is required"),

    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const phoneNumber = "2348103007867";

      const text = `
*New Contact Message*

Name: ${values.name}
Email: ${values.email}
Subject: ${values.subject}

Message:
${values.message}
      `;

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        text,
      )}`;

      window.open(url, "_blank");
      resetForm();
    },
  });

  return (
    <div className="bg-gradient-to-br from-[#0b1424] to-[#0f1f3d] text-white">
      <Helmet>
        <title>Contact Us | ROSCO AUTOTECH</title>
        <meta
          name="description"
          content="Contact ROSCO AUTOTECH for service requests, inquiries, and support — reach out via WhatsApp or our contact form for fast assistance."
        />
      </Helmet>
      <section className="py-20 text-center px-6 bg-[#071633]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-gray-400">
          Have a question or need a service? Reach out and we'll respond
          instantly via WhatsApp.
        </p>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-10">
        <div className="bg-[#081A38] backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`w-full p-3 rounded-xl bg-[#0b1424] border outline-none ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "border-white/10 focus:border-pryClr"
                }`}
              />

              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full p-3 rounded-xl bg-[#0b1424] border outline-none ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-white/10 focus:border-pryClr"
                }`}
              />

              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className={`w-full p-3 rounded-xl bg-[#0b1424] border outline-none ${
                  formik.touched.subject && formik.errors.subject
                    ? "border-red-500"
                    : "border-white/10 focus:border-pryClr"
                }`}
              />

              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.subject}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className={`w-full p-3 rounded-xl bg-[#0b1424] border outline-none ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : "border-white/10 focus:border-pryClr"
                }`}
              />

              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-pryClr cursor-pointer py-3 rounded-lg font-semibold hover:bg-pryClr transition shadow-lg"
            >
              Send
            </button>
          </form>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
          <h2 className="text-4xl text-center lg:text-left font-semibold">
            Get In Touch
          </h2>

          <div className="flex items-start gap-4 bg-[#0b1c3d] border border-white/10 p-5 rounded-2xl">
            <div className="bg-pryClr p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-400 text-sm">
                105, Beside Itabiyi Comp. Stadium Area, Ogbomosho, Oyo State.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-[#0b1c3d] border border-white/10 p-5 rounded-2xl">
            <div className="bg-pryClr p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-400 text-sm">+234 813 459 1487</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-[#0b1c3d] border border-white/10 p-5 rounded-2xl">
            <div className="bg-pryClr p-3 rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-400 text-sm">rosco_autotech</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
