// import AboutPageTwo from '@/component/AboutPageTwo';
// import React, { useState } from 'react'

import AboutPageTwo from "@/component/AboutPageTwo";

const DPAData = async () => {
  // const [apiRes , setAPiRes] = useState()
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const resData = await data.json();
  console.log("res Data ==> ", resData)

  return (
    <>
    <div>Please provide consumer id</div>
    {resData && (
      <AboutPageTwo apiRes={resData} />

    )}
    </>
    
  )
}

export default DPAData