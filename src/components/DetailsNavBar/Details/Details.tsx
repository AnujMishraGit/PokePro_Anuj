import React from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'

function Details() {
console.log("I the details has been mounted");

  const location = useLocation();
  console.log(location)
  return (
    <div>
      Details
    </div>
  )
}

export default Details
