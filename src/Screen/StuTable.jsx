import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import PopUp from "../Components/PopUp/PopUp";

const StuTable = ({ data }) => {
  const [viewData, setViewData] = useState([]);
  const [popUpView, setPopUpView] = useState({
    open: false,
    type: "",
    title: "",
  });

  const handleView = (e, data) => {
    // console.log('data', data.programme);
    setViewData(data);
    // console.log('setval');

    setPopUpView({
      open: true,
      type: "info",
      title: "Batch Wise Attendance Details",
    });
  };

  return (
    <div className="overflow-y-auto">
      {popUpView.open ? (
        <PopUp
          title={popUpView.title}
          type={popUpView.type}
          width={"lg"}
          handleClose={() =>
            setPopUpView({
              open: false,
              type: "",
              title: "",
            })
          }
        >
          <div>
            <h1 className="text-center my-2 text-h4">{`${viewData.programme} - ( ${viewData.programmeshortname} )`}</h1>
            <div className="overflow-y-auto my-2">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th rowSpan="2" className="border px-4 py-2">
                      Batch
                    </th>
                    <th rowSpan="2" className="border px-4 py-2">
                      Section
                    </th>
                    <th rowSpan="2" className="py-2 px-4 border">
                      Strength
                    </th>
                    <th colSpan="2" className="py-2 px-4 border">
                      {`Yesterday ${data[0].previousdate ? `-${data[0].previousdate}` : ''}`}
                    </th>
                    <th colSpan="2" className="py-2 px-4 border">
                      {`Today  ${data[0].currentdate ? `-${data[0].currentdate}` : ''}`}
                    </th>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border">P</th>
                    <th className="py-2 px-4 border">A</th>
                    <th className="py-2 px-4 border">P</th>
                    <th className="py-2 px-4 border">A</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {[...new Set(viewData.batchData.map((e) => e.batchname))].reverse().map((batchName, i) => {
                    const batchData = viewData.batchData.filter((e) => e.batchname === batchName);

                    const totalBatchLength = batchData.reduce((acc, cur) => acc + cur.stulength, 0);
                    const totalYesterdayPresent = batchData.reduce((acc, cur) => acc + cur.previouspresent, 0);
                    const totalYesterdayAbsent = batchData.reduce((acc, cur) => acc + cur.previousabsent, 0);
                    const totalCurrentPresent = batchData.reduce((acc, cur) => acc + cur.currentpresent, 0);
                    const totalCurrentAbsent = batchData.reduce((acc, cur) => acc + cur.currentabsent, 0);

                    return (
                      <tr key={i}>
                        <td className="border px-4 py-2">{batchName}</td>
                        <td className="border px-4 py-2">{totalBatchLength}</td>
                        <td className="border px-4 py-2">{totalYesterdayPresent}</td>
                        <td className="border px-4 py-2">{totalYesterdayAbsent}</td>
                        <td className="border px-4 py-2">{totalCurrentPresent}</td>
                        <td className="border px-4 py-2">{totalCurrentAbsent}</td>
                      </tr>
                    );
                  })} */}

                  {
                    viewData.batchData.sort((a, b) => {
                      if (a.batchname < b.batchname) return 1;
                      if (a.batchname > b.batchname) return -1;
                      return 0;
                    }).map((e, i) => {
                      const {
                        batchname,
                        section,
                        batchlength,
                        previouspresent,
                        previousabsent,
                        currentpresent,
                        currentabsent,
                      } = e;
                      return (
                        <tr key={i}>
                          <td className="border px-4 py-2">{batchname}</td>
                          <td className="border px-4 py-2">{section}</td>
                          <td className="border px-4 py-2">{batchlength}</td>
                          <td className="border px-4 py-2">{previouspresent}</td>
                          <td className="border px-4 py-2">{previousabsent}</td>
                          <td className="border px-4 py-2">{currentpresent}</td>
                          <td className="border px-4 py-2">{currentabsent}</td>
                        </tr>
                      );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </PopUp>
      ) : null}
      <table className="min-w-full border border-gray-200 overflow-y-auto">
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
              {`Today  ${data[0].currentdate ? `-${data[0].currentdate}` : ""}`}
            </th>
            {/* <th colSpan="2" className="py-2 px-4 border"> 
              Average
            </th> */}
            <th rowSpan="2" className="py-2 px-4 border">
              View
            </th>
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
                  title={
                    !row.prepresentavg ? "" : `Average - ${row.prepresentavg}%`
                  }
                >
                  {!row.prepresentavg ? "-" : row.previouspresent}
                </td>
                <td
                  className="py-2 px-4 border"
                  title={
                    !row.preabesentavg ? "" : `Average - ${row.preabesentavg}%`
                  }
                >
                  {!row.preabesentavg ? "-" : row.previousabsent}
                </td>
                <td
                  className="py-2 px-4 border"
                  title={
                    !row.curpresentavg ? "" : `Average - ${row.curpresentavg}%`
                  }
                >
                  {!row.curpresentavg ? "-" : row.currentpresent}
                </td>
                <td
                  className="py-2 px-4 border"
                  title={
                    !row.curabesentavg ? "" : `Average - ${row.curabesentavg}%`
                  }
                >
                  {!row.curabesentavg ? "-" : row.currentabsent}
                </td>
                {/* <td className="py-2 px-4 border">{!averageP?'-':averageP}%</td> */}
                {/* <td className="py-2 px-4 border">{!averageA?'-':averageA}%</td> */}
                <td className="py-2 px-4 border border-black text-primary">
                  <BsEye onClick={(e) => handleView(e, row)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StuTable;
