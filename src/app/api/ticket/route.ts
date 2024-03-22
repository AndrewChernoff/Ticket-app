import { NextResponse } from "next/server";
import Ticket from "../../(models)/Ticket";

export async function POST(req: Request) {
  console.log("Ran");
  debugger;
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
