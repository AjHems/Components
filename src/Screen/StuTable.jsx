import React, { useState } from 'react';
import { CiViewList } from 'react-icons/ci';
import PopUp from '../Components/PopUp/PopUp';

const StuTable = ({ data }) => {
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
      title: 'Batch Wise Attendance Details'
    });
  };

  // console.log(data, 'datas');

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
              Programme : <span className=" text-text-color">{viewData.programme}</span>
            </h1>
            <div className="overflow-y-auto my-2">
              <table className="min-w-full">
                <thead className="bg-[#f4f6f9] border-t border-b border-[#eceaea] text-[#16325c]">
                  <tr className="text-sm font-semibold">
                    <th rowSpan="2">Batch</th>
                    <th rowSpan="2">Section</th>
                    <th rowSpan="2" className="text-right pr-4">
                      Strength
                    </th>
                    <th
                      colSpan="3"
                      className="border-b">{`Last Working Day ${data[0].previousdate ? `- ${data[0].previousdate}` : ''}`}</th>
                    <th
                      colSpan="3"
                      className="border-b">{`Today  ${data[0].currentdate ? `- ${data[0].currentdate}` : ''}`}</th>
                  </tr>
                  <tr className="text-sm font-semibold border-b border-[#eceaea]">
                    <th className="">PRESENT</th>
                    <th>ABSENT</th>
                    <th>NE</th>
                    <th className="">PRESENT</th>
                    <th>ABSENT</th>
                    <th>NE</th>
                  </tr>
                </thead>
                <tbody>
                  {viewData.batchData
                    .sort((a, b) => b.batchname.localeCompare(a.batchname) || a.section.localeCompare(b.section))
                    .map((e, i) => {
                      const {
                        batchname,
                        section,
                        stulength,
                        previouspresent,
                        previousabsent,
                        prene,
                        currentpresent,
                        currentabsent,
                        curne
                      } = e;
                      return (
                        <tr key={i} className="bg-gray-100 text-sm text-center hover:bg-[#e5ebff] whitespace-nowrap">
                          <td className="px-3 py-1">{batchname}</td>
                          <td className="px-3 py-1">{section}</td>
                          <td className="px-3 py-1 text-right pr-4">{stulength}</td>
                          <td className="px-3 py-1">{previouspresent}</td>
                          <td className="px-3 py-1">{previousabsent}</td>
                          <td className="px-3 py-1">{prene ? prene : 0}</td>
                          <td className="px-3 py-1">{currentpresent}</td>
                          <td className="px-3 py-1">{currentabsent}</td>
                          <td className="px-3 py-1">{curne ? curne : 0}</td>
                        </tr>
                      );
                    })}
                </tbody>
                <tfoot className="bg-[#f4f6f9]  ">
                  <tr className=" text-sm font-semibold border-t border-b border-[#eceaea] text-center text-[#16325c]">
                    <td className="px-4 text-left">Total</td>
                    <td className="px-3 py-2"></td>
                    <td className="px-3 py-2 text-right pr-4">
                      {viewData?.batchData?.reduce((a, r) => a + (r.stulength || 0), 0)}
                    </td>
                    <td className="px-3 py-2">
                      {viewData?.batchData?.reduce((a, r) => a + (r.previouspresent || 0), 0)}
                    </td>
                    <td className="px-3 py-2">
                      {viewData?.batchData?.reduce((a, r) => a + (r.previousabsent || 0), 0)}
                    </td>
                    <td className="px-3 py-2">{viewData?.batchData?.reduce((a, r) => a + (r.prene || 0), 0)}</td>
                    <td className="px-3 py-2">
                      {viewData?.batchData?.reduce((a, r) => a + (r.currentpresent || 0), 0)}
                    </td>
                    <td className="px-3 py-2">
                      {viewData?.batchData?.reduce((a, r) => a + (r.currentabsent || 0), 0)}
                    </td>
                    <td className="px-3 py-2">{viewData?.batchData?.reduce((a, r) => a + (r.curne || 0), 0)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </PopUp>
      ) : null}
      <table className="min-w-full ">
        <thead className="bg-[#f4f6f9] border-t border-[#eceaea] text-[#16325c]">
          <tr className="text-sm font-semibold">
            <th rowSpan="2">Programme</th>
            <th rowSpan="2">Strength</th>
            <th
              colSpan="3"
              className="border-b">{`Last Working Day ${data[0].previousdate ? `- ${data[0].previousdate}` : ''}`}</th>
            <th
              colSpan="3"
              className="border-b">{`Today  ${data[0].currentdate ? `- ${data[0].currentdate}` : ''}`}</th>
            {/* <th colSpan="2" > 
              Average
            </th> */}
            <th rowSpan="2">View</th>
          </tr>
          <tr className=" text-sm font-semibold border-b border-[#eceaea]">
            <th className="">PRESENT</th>
            <th>ABSENT</th>
            <th>NE</th>
            <th className="">PRESENT</th>
            <th>ABSENT</th>
            <th>NE</th>
            {/* <th className="py-2 px-4">P</th>
            <th className="py-2 px-4">A</th> */}
          </tr>
        </thead>
        <tbody>
          {data

            .map((row, index) => {
              return (
                <tr key={index} className="bg-gray-100 text-sm text-center whitespace-nowrap hover:bg-[#e5ebff] ">
                  <td className=" px-3 py-1 text-left">{!row.programme ? '-' : row.programme}</td>
                  <td className="px-3 py-1">{!row.stulength ? '-' : row.stulength}</td>
                  <td className="px-3 py-1" title={!row.prepresentavg ? '' : `Average - ${row.prepresentavg}%`}>
                    {row.previouspresent}
                  </td>
                  <td className="px-3 py-1" title={!row.preabesentavg ? '' : `Average - ${row.preabesentavg}%`}>
                    {row.previousabsent}
                  </td>
                  <td className="px-3 py-1" title={!row.preabesentavg ? '' : `Average - ${row.preabesentavg}%`}>
                    {row.prene}
                  </td>
                  <td className="px-3 py-1" title={!row.curpresentavg ? '' : `Average - ${row.curpresentavg}%`}>
                    {row.currentpresent}
                  </td>
                  <td className="px-3 py-1" title={!row.currabsentavg ? '' : `Average - ${row.currabsentavg}%`}>
                    {row.currentabsent}
                  </td>
                  <td className="px-3 py-1" title={!row.currabsentavg ? '' : `Average - ${row.currabsentavg}%`}>
                    {row.curne}
                  </td>

                  <td className="px-3 py-1 center">
                    <CiViewList size={20} className="text-primary" onClick={(e) => handleView(e, row)} />
                  </td>
                </tr>
              );
            })
            .sort((a, b) => a?.programme?.localeCompare(b?.programme))}
        </tbody>
        <tfoot className="bg-[#f4f6f9]">
          <tr className="text-sm font-semibold border-t border-b border-[#eceaea] text-center text-[#16325c]">
            <td className="px-3 py-2 text-left">Total</td>
            <td className="px-3 py-2">{data.reduce((acc, row) => acc + (row.stulength || 0), 0)}</td>
            <td className="px-3 py-2">
              {data.reduce((acc, row) => acc + (row.previouspresent ? row.previouspresent : 0), 0)}
            </td>
            <td className="px-3 py-2 text-center">
              {data.reduce((acc, row) => acc + (row.previousabsent ? row.previousabsent : 0), 0)}
            </td>
            <td className="px-3 py-2 text-center">{data.reduce((acc, row) => acc + (row.prene ? row.prene : 0), 0)}</td>
            <td className="px-3 py-2 text-center">
              {data.reduce((acc, row) => acc + (row.currentpresent ? row.currentpresent : 0), 0)}
            </td>
            <td className="px-3 py-2 text-center">
              {data.reduce((acc, row) => acc + (row.currentabsent ? row.currentabsent : 0), 0)}
            </td>
            <td className="px-3 py-2 text-center">{data.reduce((acc, row) => acc + (row.curne ? row.curne : 0), 0)}</td>
            <td rowSpan={1} className=""></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default StuTable;