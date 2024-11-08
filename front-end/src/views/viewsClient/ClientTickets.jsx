
import {TicketsClient} from '../../components/ClientComponents/TicketsClient'
import ClientSidebar from '../../components/ClientSideBar'

export const ClientTickets = () => {
  return (
    <div className='flex flex-1'>
        <ClientSidebar/>
        <TicketsClient/>
    </div>
  )
}
