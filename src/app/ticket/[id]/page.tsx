import { TicketForm } from "@/app/(components)/TicketForm";
import { api } from "@/sevices/services";

const TicketItem = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  console.log(id);

  const editMode = id === "new" ? false : true;

  let updateTicketData = {};

  if (editMode) {
    updateTicketData = await api.getTicket(id);
  } else {
    //updateTicketData = null;
  }

  const getTicketToUpdate = await api.getTicket(id);

  return <TicketForm ticket={getTicketToUpdate} editMode={editMode} />;
};

export default TicketItem;
