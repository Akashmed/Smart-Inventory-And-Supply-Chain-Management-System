import { FaStar, FaQuoteLeft } from "react-icons/fa"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      company: "TechFlow Solutions",
      rating: 5,
      quote:
        "SmartInventory transformed our warehouse operations. We reduced stockouts by 85% and improved order accuracy dramatically. The predictive analytics are game-changing.",
      avatar: "/src/assets/sarah.jpg",
    },
    {
      name: "Marcus Rodriguez",
      role: "Supply Chain Director",
      company: "Global Manufacturing Co.",
      rating: 5,
      quote:
        "The supplier management features streamlined our entire procurement process. We now manage 200+ suppliers effortlessly with automated reordering and performance tracking.",
      avatar: "/src/assets/marcus.jpg",
    },
    {
      name: "Emily Thompson",
      role: "Business Owner",
      company: "Retail Plus",
      rating: 5,
      quote:
        "As a growing business, SmartInventory scaled perfectly with us. The real-time analytics helped us make data-driven decisions that increased our profit margins by 23%.",
      avatar: "/src/assets/emily.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how businesses like yours are transforming their inventory management with SmartInventory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1 relative"
            >
              <div className="absolute top-6 right-6 text-blue-100 group-hover:text-blue-200 transition-colors">
                <FaQuoteLeft className="w-8 h-8" />
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg italic">"{testimonial.quote}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
