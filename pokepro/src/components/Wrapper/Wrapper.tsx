import React from 'react'
type Props = {
    children: string | JSX.Element | JSX.Element[] 
  }

function Wrapper(children:Props) {
  return (
    children
  )
}

export default Wrapper
