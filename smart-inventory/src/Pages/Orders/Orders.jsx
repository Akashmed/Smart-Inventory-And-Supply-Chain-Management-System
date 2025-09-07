
import { useState } from "react"
import { FaPlus, FaEye, FaFilter } from "react-icons/fa"

const Orders = () => {
  const [statusFilter, setStatusFilter] = useState("all")

  const orders = [
    { id: "ORD-001", product: "Wireless Headphones", quantity: 50, status: "pending", date: "2024-01-15", placedBy: "John Doe" },
    { id: "ORD-002", product: "Smartphone Cases", quantity: 100, status: "completed", date: "2024-01-14", placedBy: "Jane Smith" },
    { id: "ORD-003", product: "USB Cables", quantity: 200, status: "pending", date: "2024-01-14", placedBy: "Mike Johnson" },
    { id: "ORD-004", product: "Power Banks", quantity: 75, status: "completed", date: "2024-01-13", placedBy: "Sarah Wilson" },
    { id: "ORD-005", product: "Wireless Mouse", quantity: 25, status: "cancelled", date: "2024-01-12", placedBy: "Tom Brown" },
    { id: "ORD-006", product: "Keyboard", quantity: 30, status: "pending", date: "2024-01-11", placedBy: "Lisa Davis" },
  ]

  const filteredOrders = statusFilter === "all" ? orders : orders.filter((order) => order.status === statusFilter)

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-teal-100 text-teal-800",
    cancelled: "bg-red-100 text-red-700",
  }

  // rumit 

  return (
    <div className="space-y-8 p-6 mx-auto max-w-7xl my-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent drop-shadow-sm">
          Orders
        </h1>
        <button className="flex items-center px-5 py-2.5 rounded-xl text-white font-medium shadow-lg 
          bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 
          transition transform hover:scale-105">
          <FaPlus className="mr-2 h-4 w-4" />
          Place Order
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md border border-gray-100">
        <FaFilter className="text-teal-500 h-4 w-4" />
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Orders</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gradient-to-r from-teal-50 to-white">
              <tr>
                {["Order ID", "Product", "Quantity", "Status", "Date", "Placed By", "Actions"].map((head) => (
                  <th
                    key={head}
                    className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-teal-50/40 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4">{order.product}</td>
                  <td className="px-6 py-4">{order.quantity}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{order.date}</td>
                  <td className="px-6 py-4">{order.placedBy}</td>
                  <td className="px-6 py-4">
                    <button className="flex items-center justify-center p-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-700 text-white hover:from-teal-600 hover:to-teal-800 transition transform hover:scale-110">
                      <FaEye className="h-4 w-4" />
                    </button>
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

export default Orders
