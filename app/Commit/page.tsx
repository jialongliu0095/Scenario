import React from 'react'

export default function Page() {
  return (
    <div className="box-content w-64 h-auto border-4 p-4 bg-gray-100 rounded-md shadow-md">
      <p className="mb-2 text-gray-700">Committee Chairman</p>
      <h1 className="text-xl font-bold text-blue-600 mb-2">Mr. Jack Anderson</h1>
      <p className="text-gray-800">
        Mr. Anderson is responsible for overseeing the overall management of the strata scheme,
        coordinating with committee members, and ensuring the building's operations align with legal and financial regulations.
      </p>
      <div className="mt-3">
        <p><strong>Email:</strong> jack.anderson@example.com</p>
        <p><strong>Phone:</strong> 04XXXXXXX</p>
        <p><strong>Office:</strong> Unit 101, Building A, NSW</p>
      </div>
    </div>
  )
}