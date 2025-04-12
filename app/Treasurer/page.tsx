import React from 'react'

export default function TreasurerCard() {
  return (
    <div className="box-content w-64 h-auto border-4 p-4 bg-gray-100 rounded-md shadow-md">
      <p className="mb-2 text-gray-700">Committee Treasurer</p>
      <h1 className="text-xl font-bold text-blue-600 mb-2">Mr. Liam Wilson</h1>
      <p className="text-gray-800">
        Mr. Wilson is responsible for managing the financial accounts, levies, and reporting budgets to the Owners Corporation.
      </p>
      <div className="mt-3">
        <p><strong>Email:</strong> liam.wilson@example.com</p>
        <p><strong>Phone:</strong> XXXXXXXX</p>
        <p><strong>Office:</strong> Unit 303, Building C, NSW</p>
      </div>
    </div>
  )
}