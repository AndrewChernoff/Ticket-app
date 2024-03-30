import { NextResponse } from "next/server";
import Ticket from "../../(models)/Ticket";

export type TicketType = {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  progress: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export async function GET(req: Request) {
  try {
    const items: TicketType[] = await Ticket.find({});
    return NextResponse.json(items , { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    console.log(body);
    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
