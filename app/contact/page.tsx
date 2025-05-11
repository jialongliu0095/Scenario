// This is a Next.js page component that handles a contact form submission.
import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    })

    if (res.status === 302) {
      window.location.href = '/thank-you'
    } else {
      const data = await res.json()
      setMessage(data.error || 'Something went wrong.')
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>if you have question please contact Us</h1>
        <p>We are here to help you with any questions or concerns you may have.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required
        /><br /><br />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  )
}
