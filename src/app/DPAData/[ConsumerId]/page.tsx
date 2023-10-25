"use client";
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

const DPADataConsumer = ({ params }: { params: { ConsumerId: string } }) => {
  // const data = await fakeAPiCall();
  const [data, setData] = useState(0);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fakeAPiCall().then((data : any) => {
      setApiData(data);
    });
  }, []);

  console.log("apiData outside", apiData);

  const onClickHandler = () => {
    console.log("Clicked...");
    setData(data + 1);
  };
  console.log("params here", params);

  if(apiData.length == 0){
    return(
      <p>
        Loading...
      </p>
    )
  }

  return (
    <>
      {/* <div>DPADataConsumer with {params.ConsumerId} ID</div>
      <button onClick={onClickHandler}>data</button>
      <p>{data}</p> */}
      {apiData?.map((data: any, index: any) => {
        return(
          <p key={index}>{data.title}</p>
        )
      })}
    </>
  );
};

export default DPADataConsumer;
