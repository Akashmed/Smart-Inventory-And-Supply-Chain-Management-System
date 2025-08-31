import { useState } from "react"
import { FaPlus, FaMinus, FaHistory, FaExclamationTriangle } from "react-icons/fa"

const Inventory = () => {
  const [activeTab, setActiveTab] = useState("logs")

  const inventoryLogs = [
    { id: 1, product: "Wireless Headphones", type: "inbound", quantity: 100, date: "2024-01-15", remarks: "New stock arrival" },
    { id: 2, product: "Smartphone Cases", type: "outbound", quantity: 50, date: "2024-01-14", remarks: "Order fulfillment" },
    { id: 3, product: "USB Cables", type: "inbound", quantity: 200, date: "2024-01-13", remarks: "Bulk purchase" },
    { id: 4, product: "Power Banks", type: "outbound", quantity: 25, date: "2024-01-12", remarks: "Customer order" },
    { id: 5, product: "Wireless Mouse", type: "inbound", quantity: 50, date: "2024-01-11", remarks: "Restocking" },
  ]

  const lowStockItems = [
    { name: "Wireless Mouse", current: 5, threshold: 20, supplier: "Global tech" },
    { name: "Keyboard", current: 8, threshold: 25, supplier: "TechCorp" },
    { name: "Monitor Stand", current: 3, threshold: 15, supplier: "Estern traders" },
    { name: "Webcam", current: 12, threshold: 30, supplier: "TechCorp" },
  ]

  return (
    <div className="space-y-8 mx-auto max-w-7xl my-12 p-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent drop-shadow-sm">
          Inventory Management
        </h1>
        {/* <button className="flex items-center px-5 py-2.5 rounded-xl text-white font-medium shadow-lg 
          bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 
          transition transform hover:scale-105">
          <FaPlus className="mr-2 h-4 w-4" />
          Add Inventory Log
        </button> */}
      </div>

      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { key: "logs", label: "Inventory Logs", icon: <FaHistory className="inline mr-2 h-4 w-4" /> },
            { key: "alerts", label: "Low Stock Alerts", icon: <FaExclamationTriangle className="inline mr-2 h-4 w-4" /> },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`relative py-2 px-3 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "text-teal-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-teal-700 rounded-t-lg"></span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === "logs" && (
        <div className="bg-white shadow-xl rounded-2xl p-4 overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gradient-to-r from-teal-50 to-white">
                <tr>
                  {["Product", "Type", "Quantity", "Date", "Remarks"].map((head) => (
                    <th key={head} className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {inventoryLogs.map((log) => (
                  <tr
                    key={log.id}
                    className="hover:bg-teal-50/40 transition"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">{log.product}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold shadow-sm ${
                          log.type === "inbound"
                            ? "bg-teal-100 text-teal-800"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {log.type === "inbound" ? (
                          <FaPlus className="mr-1 h-3 w-3 text-teal-600" />
                        ) : (
                          <FaMinus className="mr-1 h-3 w-3 text-red-600" />
                        )}
                        {log.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">{log.quantity}</td>
                    <td className="px-6 py-4 text-gray-500">{log.date}</td>
                    <td className="px-6 py-4">{log.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {activeTab === "alerts" && (
        <div className="grid sm:grid-cols-2 gap-6">
          {lowStockItems.map((item, index) => {
            const percentage = Math.round((item.current / item.threshold) * 100)
            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl border border-gray-100 p-5 hover:shadow-teal-200/50 transition transform hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaExclamationTriangle className="h-6 w-6 text-teal-600 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">Supplier: {item.supplier}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Current Stock</p>
                    <p className="text-2xl font-extrabold text-teal-600">{item.current}</p>
                    <p className="text-xs text-gray-400">Threshold: {item.threshold}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${percentage < 50 ? "bg-red-500" : "bg-teal-500"}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{percentage}% of threshold</p>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white text-sm font-medium rounded-lg shadow-md hover:from-teal-600 hover:to-teal-800">
                    Reorder
                  </button>
                  <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200">
                    Update Threshold
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Inventory
