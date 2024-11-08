import React from 'react'
import ClientSidebar from '../../components/ClientSideBar'
import {TicketsClient} from '../../components/ClientComponents/TicketsClient'

export const ClientTickets = () => {
  return (
    <div className='flex flex-1'>
        <ClientSidebar/>
        <TicketsClient/>
    </div>
  )
}
