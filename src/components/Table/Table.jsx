import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-[#0000003D]">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-[#F4F4F4]">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="py-3 px-5 text-left font-medium"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white">
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FBFBFB]"}>
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className="text-[#00000099] text-[14px] font-bold py-3 px-5"
                >
                  {col.accessor === "action" ? (
                    <div className="flex items-center   gap-1">
                      <button className="p-2 rounded-md hover:bg-[#0000000A]">
                        <MdEdit />
                      </button>
                      <button className="p-2 rounded-md hover:bg-[#0000000A]">
                        <MdDelete />
                      </button>
                      <button className="p-2 rounded-md hover:bg-[#0000000A]">
                        <CiShare2 />
                      </button>
                    </div>
                  ) : (
                    row[col.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
