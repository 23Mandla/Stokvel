"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Events() {
  const [date, setDate] = useState(new Date());

  const newDate = (newDate) => {
    setDate(newDate);
  };

  const calendarStyle = {
    width: "70%",
    height: "80%",
    border: "1px solid #000",
    borderRadius: "0.5rem",
    background: "#fff",
    color: "#000",
  };

  return (
    <div className="grid grid-cols-2 gap-10 w-[75%] h-[80%] border rounded-md bg-white text-black pt-14 pl-10">
      <di>
        Activities
      </di>
      <di>
        <h1 className="mb-5 font-bold text-gray-700">Events</h1>
        <Calendar onChange={newDate} value={date}/>
      </di>
    </div>
  );
}
