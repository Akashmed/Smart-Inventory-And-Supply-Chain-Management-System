
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">SmartInventory</h3>
          <p className="text-gray-200">
            Modern inventory management platform to manage products, suppliers, and orders efficiently.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="flex items-center mb-2"><FaPhone className="mr-2"/> +1 (556) 123-4567</p>
          <p className="flex items-center mb-4"><FaEnvelope className="mr-2"/> contact@smartinventory.com</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-200"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-200 mt-8 text-sm">
        &copy; {new Date().getFullYear()} SmartInventory. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
