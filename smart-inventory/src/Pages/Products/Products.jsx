
import { useState } from "react"
import { FaPlus, FaEdit, FaTrash, FaSearch, FaTimes } from "react-icons/fa"

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [products, setProducts] = useState([
    //     {"product_id":1,"name":"Laptop","category":"Dell i5 10th Gen","price":80000,"stock":25,"supplier_id":1}
    // ,{"product_id":2,"name":"Mouse","category":"Wireless Mouse","price":1200,"stock":100,"supplier_id":2}
    // ,{"product_id":3,"name":"Keyboard","category":"Mechanical Keyboard","price":3500,"stock":60,"supplier_id":1}


    { id: 1, name: "Wireless Headphones", stock: 150, price: 99.99, supplier: "TechCorp", category: "Electronics" },
    { id: 2, name: "Smartphone Cases", stock: 300, price: 24.99, supplier: "AccessoryPlus", category: "Accessories" },
    { id: 3, name: "USB Cables", stock: 500, price: 12.99, supplier: "CableTech", category: "Cables" },
    { id: 4, name: "Power Banks", stock: 75, price: 49.99, supplier: "PowerSolutions", category: "Electronics" },
    { id: 5, name: "Wireless Mouse", stock: 5, price: 34.99, supplier: "TechCorp", category: "Peripherals" },
    { id: 6, name: "Keyboard", stock: 8, price: 79.99, supplier: "TechCorp", category: "Peripherals" },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({ name: "", stock: 0, price: 0, supplier: "", category: "" })

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openModal = (product = null) => {
    if (product) {
      setEditingProduct(product)
      setFormData({ ...product })
    } else {
      setEditingProduct(null)
      setFormData({ name: "", stock: 0, price: 0, supplier: "", category: "" })
    }
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? { ...formData, id: editingProduct.id } : p)))
    } else {
      setProducts([...products, { ...formData, id: Date.now() }])
    }
    closeModal()
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  return (
    <div className="space-y-8 my-12 mx-auto max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
          Products
        </h1>
        <button
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-xl shadow-md hover:scale-105 transform transition-all duration-200"
          onClick={() => openModal()}
        >
          <FaPlus className="h-4 w-4" /> Add Product
        </button>
      </div>

      <div className="relative group">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors h-4 w-4" />
        <input
          type="text"
          placeholder="Search products or suppliers..."
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="rounded-2xl bg-white/80 backdrop-blur-md shadow-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                {["Product", "Stock", "Price", "Supplier", "Category", "Actions"].map((head) => (
                  <th key={head} className="px-6 py-3 text-left text-sm font-semibold text-gray-600">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-teal-50/50 transition-all duration-200">
                  <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${product.stock < 20
                          ? "bg-red-100 text-red-700"
                          : product.stock < 50
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-800">${product.price}</td>
                  <td className="px-6 py-4 text-gray-600">{product.supplier}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-100 text-indigo-700 shadow-sm">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-2 rounded-lg bg-teal-100 text-teal-600 hover:bg-teal-200 transition-all" onClick={() => openModal(product)}>
                        <FaEdit className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-all" onClick={() => handleDelete(product.id)}>
                        <FaTrash className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-xl">
            <button className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-200" onClick={closeModal}>
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">{editingProduct ? "Edit Product" : "Add Product"}</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg outline-none" />
              <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg outline-none" />
              <input type="number" step="0.01" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg outline-none" />
              <input type="text" name="supplier" placeholder="Supplier" value={formData.supplier} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg outline-none" />
              <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg outline-none" />
              <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition">
                {editingProduct ? "Update Product" : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products
