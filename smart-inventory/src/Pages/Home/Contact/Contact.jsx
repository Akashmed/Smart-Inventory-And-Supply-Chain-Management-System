import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock, FaHeadset } from "react-icons/fa"

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 9AM-6PM EST",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: "support@smartinventory.com",
      subtitle: "We'll respond within 24 hours",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Our Office",
      details: "123 Business Ave, Suite 100",
      subtitle: "New York, NY 10001",
      color: "bg-purple-50 text-purple-600",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your inventory management? Our team is here to help you get started with SmartInventory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl ${info.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                          <p className="text-gray-900 font-medium">{info.details}</p>
                          <p className="text-gray-600 text-sm">{info.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-50 text-orange-600">
                  <FaHeadset className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">24/7 Support Available</h4>
              </div>
              <p className="text-gray-600">
                Our dedicated support team is available around the clock to help you with any questions or technical
                issues.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option>General Inquiry</option>
                    <option>Product Demo Request</option>
                    <option>Technical Support</option>
                    <option>Pricing Information</option>
                    <option>Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your inventory management needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <FaPaperPlane className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-4">
              <FaClock className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">&lt; 2 Hours</h4>
            <p className="text-gray-600">Average Response Time</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-green-600 mb-4">
              <FaHeadset className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">98%</h4>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 text-purple-600 mb-4">
              <FaPhone className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">24/7</h4>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
