import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#071633] text-gray-400 py-16 px-6 md:px-12 lg:px-20">
      <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-white font-bold text-lg mb-4">ROSCO AUTOTECH</h2>
          <p className="text-sm leading-relaxed">
            Precision engineering for the modern enthusiast. Excellence is not a
            standard, it’s our baseline.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">CAPABILITIES</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Diagnostics</li>
            <li className="hover:text-white cursor-pointer">
              Performance Tuning
            </li>
            <li className="hover:text-white cursor-pointer">
              Scheduled Maintenance
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">LEGAL</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">OPERATIONAL HOURS</h3>
          <p className="text-sm mb-2">Mon – Fri: 08:00 – 18:00</p>
          <p className="text-sm mb-4">Sat: 09:00 – 15:00</p>

          <div className="flex gap-3 mt-4">
            <div className="w-9 h-9 flex items-center text-white justify-center rounded-full bg-[#0b1f44] hover:bg-pryClr transition cursor-pointer">
              <FaFacebookF size={20} />
            </div>
            <div className="w-9 h-9 flex items-center text-white justify-center rounded-full bg-[#0b1f44] hover:bg-pryClr transition cursor-pointer">
              <IoLogoTiktok size={20} />
            </div>
            <div className="w-9 h-9 flex items-center text-white justify-center rounded-full bg-[#0b1f44] hover:bg-pryClr transition cursor-pointer">
              <FaInstagram size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500">
        <p>© 2026 ROSCO AUTOTECH. Precision Engineering.</p>
      </div>
    </footer>
  );
};

export default Footer;
