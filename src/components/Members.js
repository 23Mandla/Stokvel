import React from "react";

export default function Members() {
  return (
    <div className="w-[75%] h-[80%] border rounded-md bg-white text-black p-5">
      <table className="w-[100%] border-collapse">
        <tr>
          <th className="border p-1">Surname</th>
          <th className="border p-1">Name</th>
          <th className="border p-1">Amount</th>
        </tr>
        <tr className="bg-gray-200">
          <td className="border text-center p-1">Mbolekwa</td>
          <td className="border text-center p-1">Mandla</td>
          <td className="border text-center p-1">R10000</td>
        </tr>
      </table>
    </div>
  );
}
