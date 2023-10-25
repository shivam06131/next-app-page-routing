import { Metadata, ResolvingMetadata } from "next";
import React from "react";

const DPADataLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <nav>Navbar</nav>
        <div>{children}</div>
      </div>
    </>
  );
};

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> { 
  const ConsumerId = params.ConsumerId;
  console.log("ConsumerId Metadata ==> ",ConsumerId);
  // console.log("parent Metadata ==> ",parent);

  return{
    title : "test title 2",
    description : "test description 2"
  };
 } 

// export const metadata = {
//   title : "test title 1",
//   description : "test desc"
// }

export default DPADataLayout;
