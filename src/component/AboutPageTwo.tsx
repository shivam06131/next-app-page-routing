"use client";
import React from "react";

type Props = {
  apiRes: any;
};

const AboutPageTwo = (props: Props) => {
  console.log("API RES to client", props.apiRes);
  return (
    <>
      <p>About Us Page Two</p>
      {props.apiRes.map((data: any, index: any) => {
        return(
          <p key={index}>{data.title}</p>
        )
      })}
    </>
  );
};

export default AboutPageTwo;
