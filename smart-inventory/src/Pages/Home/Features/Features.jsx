import { FaBox, FaChartLine, FaUsers, FaClipboardList, FaChartBar, FaExclamationTriangle } from "react-icons/fa"
import { Link } from "react-router-dom"

const Features = () => {
  const features = [
    {
      icon: FaBox,
      title: "Smart Inventory Tracking",
      description:
        "Real-time stock monitoring with automated low-stock alerts and predictive analytics to prevent stockouts.",
      color: "bg-teal-50 text-teal-600",
    },
    {
      icon: FaClipboardList,
      title: "Advanced Order Management",
      description:
        "Streamline your order workflow with automated processing, status tracking, and customer notifications.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: FaUsers,
      title: "Supplier Network Hub",
      description:
        "Centralized supplier management with performance metrics, automated reordering, and contract tracking.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: FaChartLine,
      title: "Dynamic Product Catalog",
      description:
        "Intelligent product management with bulk operations, pricing optimization, and category organization.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: FaChartBar,
      title: "Business Intelligence",
      description: "Comprehensive analytics dashboard with custom reports, trend analysis, and performance insights.",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: FaExclamationTriangle,
      title: "Smart Alerts & Notifications",
      description: "Proactive monitoring system with customizable alerts for critical inventory events and thresholds.",
      color: "bg-red-50 text-red-600",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-teal-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-teal-600 mb-4">Powerful Features for Modern Inventory Management</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your inventory operations with our comprehensive suite of intelligent tools designed for
            efficiency and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                <div className="mt-6 flex items-center text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Link to="/inventory" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-colors cursor-pointer shadow-lg hover:shadow-xl">
            <FaBox className="w-5 h-5" />
            <span>Start Managing Your Inventory</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features
