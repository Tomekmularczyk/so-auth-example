import React from 'react'

const CreateProfile = () => (
  <form>
    <h5>Create profile</h5>
    <input
      type="text"
      name="name"
      placeholder="your name"
    />
    <input
      type="text"
      name="city"
      placeholder="city"
    />
    <input
      type="tel"
      name="telephone"
      placeholder="telephone"
    />
  </form>
)

export default CreateProfile