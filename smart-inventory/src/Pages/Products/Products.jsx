"use client"

import { useState } from "react"
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa"

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    { id: 1, name: "Wireless Headphones", stock: 150, price: 99.99, supplier: "TechCorp", category: "Electronics" },
    { id: 2, name: "Smartphone Cases", stock: 300, price: 24.99, supplier: "AccessoryPlus", category: "Accessories" },
    { id: 3, name: "USB Cables", stock: 500, price: 12.99, supplier: "CableTech", category: "Cables" },
    { id: 4, name: "Power Banks", stock: 75, price: 49.99, supplier: "PowerSolutions", category: "Electronics" },
    { id: 5, name: "Wireless Mouse", stock: 5, price: 34.99, supplier: "TechCorp", category: "Peripherals" },
    { id: 6, name: "Keyboard", stock: 8, price: 79.99, supplier: "TechCorp", category: "Peripherals" },
  ]

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.supplier.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-8 my-12 mx-auto max-w-7xl animate-fadeIn">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
          Products
        </h1>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r bg-teal-600  text-white rounded-xl shadow-md hover:scale-105 transform transition-all duration-200">
          <FaPlus className="h-4 w-4" />
          Add Product
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
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Product</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Stock</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Supplier</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Category</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-teal-50/50 transition-all duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${
                        product.stock < 20
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
                      <button className="p-2 rounded-lg bg-teal-100 text-teal-600 hover:bg-teal-200 transition-all">
                        <FaEdit className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-all">
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
    </div>
  )
}

export default Products
