import React from 'react'

export default function MaintenanceCard() {
  return (
    <div className="box-content w-64 h-auto border-4 p-4 bg-gray-100 rounded-md shadow-md">
      <p className="mb-2 text-gray-700">Maintenance Supervisor</p>
      <h1 className="text-xl font-bold text-blue-600 mb-2">Mr. Alex Brown</h1>
      <p className="text-gray-800">
        Mr. Brown handles all repair and maintenance tasks in common areas, manages work orders, and supervises contractors.
      </p>
      <div className="mt-3">
        <p><strong>Email:</strong> alex.brown@example.com</p>
        <p><strong>Phone:</strong> 0XXXXXXX</p>
        <p><strong>Office:</strong> Maintenance Room, Basement Level, NSW</p>
      </div>
    </div>
  )
}