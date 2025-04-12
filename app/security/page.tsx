import React from 'react'

export default function SecretaryCard() {
  return (
    <div className="box-content w-64 h-auto border-4 p-4 bg-gray-100 rounded-md shadow-md">
      <p className="mb-2 text-gray-700">Committee Secretary</p>
      <h1 className="text-xl font-bold text-blue-600 mb-2">Ms. Emily Chen</h1>
      <p className="text-gray-800">
        Ms. Chen maintains all official records, takes meeting minutes, and ensures timely communication between members.
      </p>
      <div className="mt-3">
        <p><strong>Email:</strong> emily.chen@example.com</p>
        <p><strong>Phone:</strong> XXXXXX7</p>
        <p><strong>Office:</strong> Unit 202, Building B, NSW</p>
      </div>
    </div>
  )
}