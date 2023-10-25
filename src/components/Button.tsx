'use client'
import React, { useState } from 'react'

type Props = {
    // apiData : any;
    // setApiData : any
}

const Button = (props: Props) => {
    const [apiData , setApiData ] = useState(0)
  return (
    <div>
        <p>{apiData}</p>
        <button onClick={() => setApiData(apiData + 1)}>
            Test
        </button>
    </div>
  )
}

export default Button;