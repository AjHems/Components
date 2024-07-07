import React from "react";

const StuTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-[#dedede] text-text-color">
          <tr>
            <th rowSpan="2" className="py-2 px-4 border">
              Programme
            </th>
            <th rowSpan="2" className="py-2 px-4 border">
              Strength
            </th>
            <th colSpan="2" className="py-2 px-4 border">
              {`Yesterday ${
                data[0].previousdate ? `-${data[0].previousdate}` : ""
              }`}
            </th>
            <th colSpan="2" className="py-2 px-4 border">
              {`Today  ${
                data[0].currentdate ? `-${data[0].currentdate}` : ""
              }`}
            </th>
            {/* <th colSpan="2" className="py-2 px-4 border"> 
              Average
            </th> */}
          </tr>
          <tr>
            <th className="py-2 px-4 border">P</th>
            <th className="py-2 px-4 border">A</th>
            <th className="py-2 px-4 border">P</th>
            <th className="py-2 px-4 border">A</th>
            {/* <th className="py-2 px-4 border">P</th>
            <th className="py-2 px-4 border">A</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index} className="bg-gray-100 text-center">
                <td className="py-2 px-4 border text-left">
                  {!row.programme ? "-" : row.programme}
                </td>
                <td className="py-2 px-4 border">
                  {!row.stulength ? "-" : row.stulength}
                </td>
                <td
                  className="py-2 px-4 border"
                  title={`Average - ${
                    !row.prepresentavg ? "-" : row.prepresentavg
                  }%`}
                >
                  {!row.previouspresent ? "-" : row.previouspresent}
                </td>
                <td
                  className="py-2 px-4 border"
                  title={!row.preabesentavg ? "-" : row.preabesentavg}
                >
                  {!row.previousabsent ? "-" : row.previousabsent}
                </td>
                <td
                  className="py-2 px-4 border"
                  title={!row.curpresentavg ? "-" : row.curpresentavg}
                >
                  {!row.currentpresent ? "-" : row.currentpresent}
                </td>
                <td
                  className="py-2 px-4 border"
                  title={!row.preabesentavg ? "-" : row.preabesentavg}
                >
                  {!row.currentabsent ? "-" : row.currentabsent}
                </td>
                {/* <td className="py-2 px-4 border">{!averageP?'-':averageP}%</td> */}
                {/* <td className="py-2 px-4 border">{!averageA?'-':averageA}%</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StuTable;
