import { Link, NavLink } from "react-router-dom";
import {
  FaBox,
  FaUsers,
  FaHome,
  FaShoppingCart,
  FaWarehouse,
} from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Inventory", path: "/inventory", icon: <FaWarehouse /> },
    { name: "Suppliers", path: "/suppliers", icon: <FaUsers /> },
    { name: "Products", path: "/products", icon: <FaBox /> },
    { name: "Orders", path: "/orders", icon: <FaShoppingCart /> },
  ];


  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={handleLogoClick} className="text-2xl font-bold text-teal-600">
            <img
              src={logo}
              alt="Smart Inventory System"
              className="h-32 w-auto object-contain"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-teal-100 text-teal-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-teal-100 text-teal-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
