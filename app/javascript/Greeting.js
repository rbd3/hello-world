import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Greeting = () => {
    const messages = useSelector((state) => state.messages.value)

  return (
    <div>
      <h1>GREETING</h1>
        <h1>{messages.greeting}</h1>
    </div>
  )
}

export default Greeting
