import React from 'react'

const CreateAccount = () => (
  <form>
    <input
      type="email"
      name="email"
      placeholder="email"
    />
    <input
      type="password"
      name="pass"
      placeholder="password"
    />
    <button type="submit">Create account</button>
  </form>
)

export default CreateAccount