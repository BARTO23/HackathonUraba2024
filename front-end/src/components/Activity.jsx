import TicketItem from "./TicketItem";

export const Activity = () => {
  return (
    <section className="mt-6">
      <header>
        <h3 className="text-xl font-semibold">Resumen de Actividad</h3>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <TicketItem status="inProgress" />
        <TicketItem status="closed" />
        <TicketItem status="open" />
        <TicketItem status="inProgress" />
        <TicketItem status="closed" />
        <TicketItem status="open" />
      </div>
    </section>
  );
};
