'use client'
import Button from "@/components/Button";
import { fakeAPiCall } from "@/utils/fakeAPiCall";
import { error } from "console";
import { useEffect, useState } from "react";
// import React, { useState } from "react";

// export async function generateMetadata({params} : {
//   params : {
//     ConsumerId: string 
//   }
// }) {
//   return {
//     title : "My Test Page Metadata",
//     description : "test desc"
//   }
// }

const DPADataConsumer =  ({ params }: { params: { ConsumerId: string } }) => {
  // const data = await fakeAPiCall();
  const [apiData , setApiData] = useState(0);

  useEffect(() => {
    console.log("Api Data Updated")
  },[apiData]);

  // console.log("data here xyz", data)

  const onClickHandler = () => {
    console.log("Clicked...");
    setApiData(apiData + 1)
  };
  console.log("params here", params);

  return (
    <>
      <div>DPADataConsumer with {params.ConsumerId} ID</div>
      {/* <Button/> */}
      <button onClick={onClickHandler}>ApiData</button>
      <p>{apiData}</p>
    </>
  );
};

export default DPADataConsumer;
