import React from 'react'

function RaccoonForm(props) {

  function handleSubmit() {
    // something could go here...
  }

  return (
    <form onSubmit={handleSubmit} className="raccoon-form">
      <input placeholder="New Raccoon Name" type="text" />
      <input placeholder="New Image URL" type="text" />
      <input type="submit" value="Create New Raccoon" />
    </form>
  )
}

export default RaccoonForm
