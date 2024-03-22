"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const TicketForm = () => {
  const router = useRouter();

  const startingTicketData = {
    title: "",
    description: "",
    category: "",
    priority: "",
    progress: "",
    status: "",
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("submitted");
    let res = await fetch("/api/ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
    if (!res.ok) {
      throw new Error("Failed to create Ticket");
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
        />

        <label>Category</label>
        <select id="category" name="category" onChange={handleChange}>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            required={true}
            value={1}
            checked={formData.priority === "1"}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            required={true}
            value={2}
            checked={formData.priority === "2"}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            required={true}
            value={3}
            checked={formData.priority === "3"}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            required={true}
            value={4}
            checked={formData.priority === "4"}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            required={true}
            value={5}
            checked={formData.priority === "5"}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <button type="submit" /* className="btn" */>Create Ticket</button>
      </form>
    </div>
  );
};
