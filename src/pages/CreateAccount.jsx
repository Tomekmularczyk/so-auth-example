import React from 'react'

const CreateAccount = () => (
  <form>
    <h5>Create account</h5>
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