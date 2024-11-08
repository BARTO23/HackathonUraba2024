import React from "react";
import ClientSidebar from "../../components/ClientSideBar";
import ClientServices from "../../components/ClientComponents/ClientServices";

export const Services = () => {
  return (
    <div className='flex flex-1'>
      <ClientSidebar />
      <ClientServices />
    </div>
  );
};
