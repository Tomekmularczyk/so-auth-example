import React from 'react'

const CreateProfile = () => (
  <form>
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