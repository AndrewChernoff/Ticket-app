import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";
import { TicketType } from "../route";

type Params = { params: { id: string } };

export async function GET(req: Request, { params }: Params) {
  try {
    const { id } = params;

    const ticket: TicketType = await Ticket.findOne({ _id: id });

    if(!ticket) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });

    }
    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: Params) {
  try {
    const { id } = params;
    await Ticket.findOneAndDelete({ _id: id });

    return NextResponse.json({ message: "Item is deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
