export const api = {
  async getTickets() {
    try {
      const res = await fetch("http://localhost:3000/api/ticket", {
        cache: "no-store",
      });
      return res.json();
    } catch (error) {
      alert((error as any).message);
    }
  },
  async getTicket(id: String) {
    try {
      const res = await fetch(`http://localhost:3000/api/ticket/${id}`, {
        cache: "no-store",
      });
      return res.json();
    } catch (error) {
      alert("Could't find the ticket");
    }
  },
  async deleteTicket(id: string) {
    const res = await fetch(`http://localhost:300/api/ticket/${id}`, {
      method: "DELETE",
    });
    return res.json();
  },
};
