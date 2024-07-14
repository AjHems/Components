import React, { useState } from "react";
import { CiViewList } from "react-icons/ci";
import PopUp from "../Components/PopUp/PopUp";

const InstaTable = ({ data }) => {
  const [viewData, setViewData] = useState([]);
  const [popUpView, setPopUpView] = useState({
    open: false,
    type: "",
    title: "",
  });
  const handleView = (e, data) => {
    setViewData(data);
    setPopUpView({
      open: true,
      type: "info",
      title: "Programme Wise Attendance Details",
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
            <h1 className="text-center my-2 text-h4">{`${viewData.dept} - ( ${viewData.deptshortname} )`}</h1>
            <div className="overflow-y-auto my-2">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th rowSpan="2" className="border px-4 py-2">
                      Programme
                    </th>
                    <th rowSpan="2" className="border px-4 py-2">
                      Batch
                    </th>
                    <th rowSpan="2" className="py-2 px-4 border">
                      Section
                    </th>
                    <th rowSpan="2" className="py-2 px-4 border">
                      Strength
                    </th>
                    <th colSpan="2" className="py-2 px-4 border">
                      {`Today ${
                        data[0].currentdate ? `-${data[0].currentdate}` : ""
                      }`}
                    </th>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border">P</th>
                    <th className="py-2 px-4 border">A</th>
                  </tr>
                </thead>
                <tbody>
                  {viewData.programmeData
                    .sort((a, b) => {
                      if (a.bname < b.bname) return 1;
                      if (a.bname > b.bname) return -1;
                      return 0;
                    })
                    .map((e, i) => {
                      const {
                        programme,
                        stulength,
                        bname,
                        section,
                        currentpresent,
                        currentabsent,
                      } = e;
                      return (
                        <tr key={i}>
                          <td className="border px-4 py-2">{programme}</td>
                          <td className="border px-4 py-2">{bname}</td>
                          <td className="border px-4 py-2">{section}</td>
                          <td className="border px-4 py-2">{stulength}</td>
                          <td className="border px-4 py-2">{currentpresent}</td>
                          <td className="border px-4 py-2">{currentabsent}</td>
                        </tr>
                      );
                    })}
                  <tr className="font-bold bg-[#f0f0f0] text-center text-sm border">
                    <td className="px-4 text-left">Total</td>
                    <td className="px-2 text-center"></td>
                    <td className="px-4 text-center"></td>
                    <td className="px-4">
                      {viewData?.programmeData?.reduce(
                        (a, r) => a + (r.stulength || 0),
                        0
                      )}
                    </td>
                    <td className="px-4">
                      {viewData?.programmeData?.reduce(
                        (a, r) => a + (r.currentpresent || 0),
                        0
                      )}
                    </td>
                    <td className="px-4">
                      {viewData?.programmeData?.reduce(
                        (a, r) => a + (r.currentabsent || 0),
                        0
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </PopUp>
      ) : null}
      <table className="min-w-full overflow-y-auto">
        <thead className="bg-[#dedede] text-text-color">
          <tr className="text-sm">
            <th rowSpan="2" className="px-4 border">
              Department
            </th>
            <th rowSpan="2" className="px-4 border">
              Strength
            </th>
            <th colSpan="2" className="px-4 border">
              {`Today ${data[0].currentdate ? `-${data[0].currentdate}` : ""}`}
            </th>
            <th rowSpan="2" className="border">
              View
            </th>
          </tr>
          <tr>
            <th className="px-4 border">P</th>
            <th className="px-4 border">A</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index} className="bg-gray-100 text-center text-sm">
                <td className="px-4 border text-left">
                  {!row.dept ? "-" : row.dept}
                </td>
                <td className="px-4 border">
                  {!row.stulength ? "-" : row.stulength}
                </td>
                <td
                  className="px-4 border"
                  title={
                    !row.curpresentavg ? "" : `Average - ${row.curpresentavg}%`
                  }
                >
                  {!row.curpresentavg ? "-" : row.currentpresent}
                </td>
                <td
                  className="px-4 border"
                  title={
                    !row.curabesentavg ? "" : `Average - ${row.curabesentavg}%`
                  }
                >
                  {!row.curabesentavg ? "-" : row.currentabsent}
                </td>
                <td className="px-4 border text-center">
                  <CiViewList
                    className="text-primary"
                    size={20}
                    onClick={(e) => handleView(e, row)}
                  />
                </td>
              </tr>
            );
          })}
          <tr className="font-bold bg-[#f0f0f0] text-center text-sm border ">
            <td className="px-4  text-left">Total</td>
            <td className="px-4 ">
              {data.reduce((acc, row) => acc + (row.stulength || 0), 0)}
            </td>
            <td className="px-4 ">
              {data.reduce(
                (acc, row) =>
                  acc + (row.curpresentavg ? row.currentpresent : 0),
                0
              )}
            </td>
            <td rowSpan={1} className="px-4 ">
              {data.reduce(
                (acc, row) => acc + (row.curabesentavg ? row.currentabsent : 0),
                0
              )}
            </td>
            <td rowSpan={1} className="px-4  text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InstaTable;
