import { useState } from "react"
import { FaPlus, FaEdit, FaTrash, FaPhone, FaEnvelope, FaTimes } from "react-icons/fa"

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([
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
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingSupplier, setEditingSupplier] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    products: 0,
    totalOrders: 0,
  })

  const openModal = (supplier = null) => {
    if (supplier) {
      setEditingSupplier(supplier)
      setFormData({ ...supplier })
    } else {
      setEditingSupplier(null)
      setFormData({
        name: "",
        address: "",
        phone: "",
        email: "",
        products: 0,
        totalOrders: 0,
      })
    }
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingSupplier) {
      setSuppliers(
        suppliers.map((s) =>
          s.id === editingSupplier.id ? { ...formData, id: editingSupplier.id } : s
        )
      )
    } else {
      setSuppliers([...suppliers, { ...formData, id: Date.now() }])
    }
    closeModal()
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this supplier?")) {
      setSuppliers(suppliers.filter((s) => s.id !== id))
    }
  }

  return (
    <div className="space-y-8 mx-auto max-w-7xl my-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
          Suppliers
        </h1>
        <button
          className="flex items-center px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-xl shadow-lg hover:opacity-90 transition-all duration-300"
          onClick={() => openModal()}
        >
          <FaPlus className="mr-2 h-4 w-4" />
          Add Supplier
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {suppliers.map((supplier) => (
          <div
            key={supplier.id}
            className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{supplier.name}</h3>
              <div className="flex space-x-2">
                <button
                  className="p-2 bg-teal-100 rounded-lg hover:bg-teal-200 transition"
                  onClick={() => openModal(supplier)}
                >
                  <FaEdit className="h-4 w-4 text-teal-600" />
                </button>
                <button
                  className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition"
                  onClick={() => handleDelete(supplier.id)}
                >
                  <FaTrash className="h-4 w-4 text-red-600" />
                </button>
              </div>
            </div>
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

      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-xl">
            <button
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-200"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">
              {editingSupplier ? "Edit Supplier" : "Add Supplier"}
            </h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
              <input
                type="number"
                name="products"
                placeholder="Products"
                value={formData.products}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
              <input
                type="number"
                name="totalOrders"
                placeholder="Total Orders"
                value={formData.totalOrders}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
              >
                {editingSupplier ? "Update Supplier" : "Add Supplier"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Suppliers
