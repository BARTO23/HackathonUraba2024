import React from "react";
import ClientSidebar from "../../components/ClientSideBar";
import ClientInfo from "../../components/ClientComponents/ClientInfo";

export const ClientMain = () => {
  return (
    <div className='flex flex-1'>
      <ClientSidebar />
      <ClientInfo />
    </div>
  );
};
