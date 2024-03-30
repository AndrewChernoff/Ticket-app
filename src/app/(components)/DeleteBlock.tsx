"use client";
import { useRouter } from "next/navigation";

import { api } from "@/sevices/services";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DeleteBlock = ({ id }: { id: string }) => {
  const router = useRouter();

  const deleteHandler = async (ticketId: string) => {
    try {
      const res = await api.deleteTicket(ticketId);

      console.log(res);

      router.refresh();
    } catch (error) {
      alert("Could't delete ticket");
    }

    /* try {
      const res = await fetch(`http://localhost:3000/api/ticket/${id}`, {
        method: "DELETE",
      });
      return res.json();
    } catch (error) {
    
    } */
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={() => deleteHandler(id)}
    />
  );
};
