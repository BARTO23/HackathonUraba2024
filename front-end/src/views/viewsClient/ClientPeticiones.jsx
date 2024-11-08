import React from 'react'
import ClientSidebar from '../../components/ClientSideBar'
import {ClientRequest} from '../../components/ClientComponents/ClientRequest'

export const ClientPeticiones = () => {
  return (
    <div className='flex flex-1'>
        <ClientSidebar/>
        <ClientRequest/>
    </div>
  )
}
