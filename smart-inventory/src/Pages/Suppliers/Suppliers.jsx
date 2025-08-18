import { FaPlus, FaEdit, FaTrash, FaPhone, FaEnvelope } from "react-icons/fa"

const Suppliers = () => {
  const suppliers = [
    {
      id: 1,
      name: "TechCorp",
      address: "123 Tech Street, Silicon Valley, CA 94000",
      phone: "+1 (555) 123-4567",
      email: "contact@techcorp.com",
      products: 15,
      totalOrders: 45,
    },
    {
      id: 2,
      name: "AccessoryPlus",
      address: "456 Commerce Ave, New York, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "sales@accessoryplus.com",
      products: 8,
      totalOrders: 23,
    },
    {
      id: 3,
      name: "CableTech",
      address: "789 Industrial Blvd, Austin, TX 78701",
      phone: "+1 (555) 456-7890",
      email: "orders@cabletech.com",
      products: 12,
      totalOrders: 67,
    },
    {
      id: 4,
      name: "PowerSolutions",
      address: "321 Energy Drive, Denver, CO 80202",
      phone: "+1 (555) 321-0987",
      email: "info@powersolutions.com",
      products: 6,
      totalOrders: 34,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r bg-teal-600  bg-clip-text text-transparent">
          Suppliers
        </h1>
        <button className="flex items-center px-5 py-2.5 bg-gradient-to-r bg-teal-600  text-white rounded-xl shadow-lg hover:opacity-90 transition-all duration-300">
          <FaPlus className="mr-2 h-4 w-4" />
          Add Supplier
        </button>
      </div>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {suppliers.map((supplier) => (
          <div
            key={supplier.id}
            className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{supplier.name}</h3>
              <div className="flex space-x-2">
                <button className="p-2 bg-teal-100 rounded-lg hover:bg-teal-200 transition">
                  <FaEdit className="h-4 w-4 text-teal-600" />
                </button>
                <button className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition">
                  <FaTrash className="h-4 w-4 text-red-600" />
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-3 text-sm text-gray-700">
              <p>{supplier.address}</p>

              <div className="flex items-center">
                <FaPhone className="mr-2 h-3 w-3 text-teal-500" />
                {supplier.phone}
              </div>

              <div className="flex items-center">
                <FaEnvelope className="mr-2 h-3 w-3 text-indigo-500" />
                {supplier.email}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center bg-gradient-to-r from-teal-50 to-indigo-50 rounded-xl py-3">
                <p className="text-3xl font-bold text-teal-600">{supplier.products}</p>
                <p className="text-xs text-gray-500">Products</p>
              </div>
              <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl py-3">
                <p className="text-3xl font-bold text-green-600">{supplier.totalOrders}</p>
                <p className="text-xs text-gray-500">Total Orders</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Suppliers
