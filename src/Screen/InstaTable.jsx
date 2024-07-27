import React, { useState } from 'react';
import { CiViewList } from 'react-icons/ci';
import PopUp from '../Components/PopUp/PopUp';

const InstaTable = ({ data }) => {
  const [viewData, setViewData] = useState([]);
  const [popUpView, setPopUpView] = useState({
    open: false,
    type: '',
    title: ''
  });
  const handleView = (e, data) => {
    setViewData(data);
    setPopUpView({
      open: true,
      type: 'info',
      title: 'Programme Wise Attendance Details'
    });
    console.log(viewData, 'Viewdata');
  };

  console.log(data, 'wholedata');

  return (
    <div className="">
      {popUpView.open ? (
        <PopUp
          title={popUpView.title}
          type={popUpView.type}
          width={'lg'}
          handleClose={() =>
            setPopUpView({
              open: false,
              type: '',
              title: ''
            })
          }>
          <div>
            <h1 className="text-left my-2 text-sm text-h1-text-color">
              Department : <span className=" text-text-color">{viewData.dept}</span>
            </h1>
            <div className=" my-2">
              <table className="min-w-full overflow-y-auto">
                <thead className="bg-[#f4f6f9] border-t border-b border-[#d8dde6] text-[#16325c]">
                  <tr className=" text-sm font-semibold">
                    <th className="py-2 w-[40%]">Programme</th>
                    <th className="py-2">Batch</th>
                    <th className="py-2">Section</th>
                    <th className="py-2">Strength</th>
                    <th className="py-2">PRESENT</th>
                    <th className="py-2">ABSENT</th>
                    <th className="py-2">NE</th>
                  </tr>
                  <tr className=" text-sm font-semibold "></tr>
                </thead>
                <tbody>
                  {viewData.programmeData
                    .sort((a, b) => a.programme.localeCompare(b.programme) || b.bname.localeCompare(a.bname))
                    .map((e, i) => {
                      const { programme, stulength, bname, section, currentpresent, currentabsent, curne } = e;
                      return (
                        <tr key={i} className=" text-sm whitespace-nowrap px-3 text-center hover:bg-[#e5ebff]">
                          <td className="text-left px-3 py-1">{programme}</td>
                          <td className="px-3 py-1">{bname}</td>
                          <td className="px-3 py-1">{section}</td>
                          <td className="px-3 py-1 text-right pr-10">{stulength}</td>
                          <td className="px-3 py-1">{currentpresent}</td>
                          <td className="px-3 py-1">{currentabsent}</td>
                          <td className="px-3 py-1">{curne}</td>
                        </tr>
                      );
                    })}
                </tbody>
                <tfoot className="bg-[#f4f6f9]  ">
                  <tr className=" text-sm font-semibold border-t border-b border-[#eceaea] text-center text-[#16325c]">
                    <td className="text-left py-2 px-3">Total</td>
                    <td className="py-2 px-2"></td>
                    <td className="py-2 px-2"></td>
                    <td className="py-2 px-2 text-right pr-10">
                      {viewData?.programmeData?.reduce((a, r) => a + (r.stulength || 0), 0)}
                    </td>
                    <td className="py-2 px-3">
                      {viewData?.programmeData?.reduce((a, r) => a + (r.currentpresent || 0), 0)}
                    </td>
                    <td className="py-2 px-3">
                      {viewData?.programmeData?.reduce((a, r) => a + (r.currentabsent || 0), 0)}
                    </td>
                    <td className="py-2 px-3">{viewData?.programmeData?.reduce((a, r) => a + (r.curne || 0), 0)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </PopUp>
      ) : null}
      <table className="min-w-full overflow-y-auto">
        <thead className="bg-[#f4f6f9] border-t border-b border-[#eceaea] text-[#16325c]">
          <tr className="text-sm font-semibold">
            <th className="px-2 py-2" rowSpan="2">
              Department
            </th>
            <th className=" text-right pr-2 px-2 py-2">Strength</th>
            <th className="  text-right w-[10%] px-2 py-2">PRESENT</th>
            <th className=" text-right w-[10%] px-2 py-2">ABSENT</th>
            <th className=" text-right w-[10%] px-2 py-2">NE</th>
            <th className="  px-2">Programme Wise View</th>
          </tr>
        </thead>
        <tbody className="">
          {data
            .sort((a, b) => {
              if (a.dept > b.dept) return 1;
              if (a.dept < b.dept) return -1;
              return 0;
            })
            .map((row, index) => {
              return (
                <tr key={index} className=" text-sm hover:bg-[#e5ebff] whitespace-nowrap text-center">
                  <td className="text-left px-3">{!row.dept ? '-' : row.dept}</td>
                  <td className="px-3 text-right pr-2">{!row.stulength ? '-' : row.stulength}</td>
                  <td className="px-3 text-right" title={!row.curpresentavg ? '' : `Average - ${row.curpresentavg}%`}>
                    {row.currentpresent}
                  </td>
                  <td className="px-3 text-right" title={!row.currabesentavg ? '' : `Average - ${row.currabesentavg}%`}>
                    {row.currentabsent}
                  </td>
                  <td className="px-3 text-right" title={!row.currabesentavg ? '' : `Average - ${row.currabesentavg}%`}>
                    {row.curne}
                  </td>
                  <td className="px-3 center">
                    <CiViewList className="text-primary cursor-pointer" size={20} onClick={(e) => handleView(e, row)} />
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot className="bg-[#f4f6f9]">
          <tr className="text-sm font-semibold border-t border-b border-[#eceaea] text-center text-[#16325c]">
            <td className=" px-2 py-2 text-left">Total</td>
            <td className=" px-2 py-2 text-right">{data.reduce((acc, row) => acc + (row.stulength || 0), 0)}</td>
            <td className=" px-2 py-2 text-right">
              {data.reduce((acc, row) => acc + (row.currentpresent ? row.currentpresent : 0), 0)}
            </td>
            <td rowSpan={1} className=" px-3 text-right">
              {data.reduce((acc, row) => acc + (row.currentabsent ? row.currentabsent : 0), 0)}
            </td>
            <td rowSpan={1} className=" px-3 text-right">
              {data.reduce((acc, row) => acc + (row.curne ? row.curne : 0), 0)}
            </td>
            <td rowSpan={1} className=""></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InstaTable;