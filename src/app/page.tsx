import { TicketCard } from "./(components)/TicketCard";
import { TicketType } from "./api/ticket/route";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/ticket", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    alert((error as any).message);
  }
};

const DashBoard = async () => {
  const tickets: TicketType[] = await getTickets().then((res) => res);
  console.log(tickets);

  const uniqueCategories = [
    ...new Set(tickets.map(({ category }) => category)),
  ];
  console.log(uniqueCategories);

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories.map((uniqueCategory, indexCategory) => (
            <div key={indexCategory} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter(
                    (filteredTicket) =>
                      filteredTicket.category === uniqueCategory
                  )
                  .map((ticket) => (
                    <TicketCard
                      key={ticket._id}
                      id={ticket._id}
                      ticket={ticket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashBoard;
