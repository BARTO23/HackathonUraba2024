import React from 'react'
import ClientSidebar from '../../components/ClientComponents/ClientSidebar'
import ClientInfo from '../../components/ClientComponents/ClientInfo'

function IndexClient() {
  return (
    <div className='flex flex-1'>
        <ClientSidebar/>
        <ClientInfo/>
    </div>
  )
}

export default IndexClient