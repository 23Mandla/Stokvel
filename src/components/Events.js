"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

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
    <div className="w-[75%] h-[80%] border rounded-md bg-white text-black pt-14 pl-10">
      <Calendar onChange={newDate} value={date} />
    </div>
  );
}
