import { TicketForm } from "@/app/(components)/TicketForm";

const TicketItem = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <TicketForm />;
};

export default TicketItem;
