import React from "react";
import { DeleteBlock } from "./DeleteBlock";
import { PriorityDisplay } from "./PriorityDisplay";
import { ProgressDisplay } from "./ProgressDisplay";
import { StatusDisplay } from "./StatusDisplay";
import { TicketType } from "../api/ticket/route";

type Props = {
  id?: string;
  ticket: TicketType;
};

export const TicketCard = ({ ticket }: Props) => {
  function formatTimestamp(timestamp: string) {
    const options: any = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(ticket.createdAt);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(ticket.createdAt);
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">this is the ticket description</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="test-xs my-1">{createdDateTime}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};
