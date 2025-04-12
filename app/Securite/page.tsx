import React from 'react'

export default function SecurityCard() {
  return (
    <div className="box-content w-64 h-auto border-4 p-4 bg-gray-100 rounded-md shadow-md">
      <p className="mb-2 text-gray-700">Head of Security</p>
      <h1 className="text-xl font-bold text-blue-600 mb-2">Mr. David Lee</h1>
      <p className="text-gray-800">
        Mr. Lee oversees the building's security protocols, handles incident reports, and ensures resident safety around the clock.
      </p>
      <div className="mt-3">
        <p><strong>Email:</strong> david.lee@example.com</p>
        <p><strong>Phone:</strong> 04XXXXXXXX</p>
        <p><strong>Office:</strong> Security Office, Ground Floor, NSW</p>
      </div>
    </div>
  )
}