import React from "react";

export default function Members({ members }) {
  return (
    <div className="w-[75%] h-[80%] border rounded-md bg-white text-black p-5">
      <table className="w-[100%] border-collapse">
        <thead>
          <tr>
            <th className="border p-1">Surname</th>
            <th className="border p-1">Name</th>
            <th className="border p-1">Amount</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className="bg-gray-200 cursor-pointer hover:bg-sky-700 hover:text-white">
              <td className="border text-center p-1">{member.surname}</td>
              <td className="border text-center p-1">{member.name}</td>
              <td className="border text-center p-1">R10,000</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
