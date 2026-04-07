import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
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
    },
  });

  return (
    <div className="bg-gradient-to-br from-[#0b1424] to-[#0f1f3d] text-white">
      <section className="py-20 text-center px-6 bg-[#071633]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-gray-400">
          Have a question or need a service? Reach out and we’ll respond
          instantly via WhatsApp.
        </p>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-10">
        {/* FORM */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full p-3 rounded-xl bg-[#0b1424] border border-white/10 focus:border-pryClr outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full p-3 rounded-xl bg-[#0b1424] border border-white/10 focus:border-pryClr outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
              className="w-full p-3 rounded-xl bg-[#0b1424] border border-white/10 focus:border-pryClr outline-none"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              onChange={formik.handleChange}
              value={formik.values.message}
              className="w-full p-3 rounded-xl bg-[#0b1424] border border-white/10 focus:border-pryClr outline-none"
            ></textarea>

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

          <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
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

          <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
            <div className="bg-pryClr p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-400 text-sm">+234 813 459 1487</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
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

      <section className="px-6 md:px-12 lg:px-20 pb-16">
        <div className="w-full h-[350px] rounded-3xl overflow-hidden border border-white/10 shadow-xl">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.168704514695!2d4.244987667673657!3d8.148000224720839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370d0f6f7a136d%3A0x2585545f4c5801e9!2s47X7%2B694%20Stadium%20area%2C%20Nurudeen%20Grammer%20school%2C%20Stadium%20Baptist%20Church%20Rd%2C%20Ogbomoso%20210211%2C%20Oyo!5e0!3m2!1sen!2sng!4v1775217200190!5m2!1sen!2sng"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
