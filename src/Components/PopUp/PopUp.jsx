import PropTypes from 'prop-types';
import React from 'react';
import { RiErrorWarningLine, RiCloseFill, RiDeleteBinLine } from 'react-icons/ri';
import { VscWarning } from 'react-icons/vsc';
import { BiMessageCheck } from 'react-icons/bi';
import { FiInfo } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
export default function PopUp(props) {
  const closeRefname = useRef(0);
  const saveRefname = useRef(0);
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        props.handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [props.handleClose]);
  useEffect(() => {
    if (props.type === 'success') {
      setTimeout(() => {
        props.handleClose();
      }, 2000);
    }
  }, [props]);
  return (
    <div>
      <div className="overflow-hidden">
        <div className={props.type === 'error' || props.type === 'warning' ? 'popup-box error' : 'popup-box other'}>
          <div className="w-full  h-full flex justify-center items-center">
            <div
              className={`${props.width === 'sm' ? 'w-[30%] ' : 'w-[30%]'}  ${props.width === 'md' ? 'w-[50%] ' : ''} ${props.width === 'lg' ? 'w-[70%] ' : ''} ${props.width === 'xl' ? 'w-[90%] ' : ''}   box  sm:w-[80%] md:w-[80%] smmd:w-[70%] relative`}
            >
              <div
                className={`  ${props.type === 'info' ? 'bg-[#3988D7]' : ''} ${props.type === 'success' ? 'bg-[#559B24]' : ''} ${props.type === 'warning' ? 'bg-[#C47C16]' : ''}
              ${props.type === 'error' ? ' bg-[#DB484F]   ' : ''}  bg-[#3988D7] py-2 px-4 heading  text-h4 flex justify-start `}
              >
                {props.type === 'error' ? <RiErrorWarningLine className="text-white  text-[26px] mt-1" /> : null}
                {props.type === 'warning' ? <VscWarning className="text-white  text-[26px] mt-1" /> : null}
                {props.type === 'success' ? <BiMessageCheck className="text-white  text-[26px] mt-1.5" /> : null}
                {props.type === 'info' ? <FiInfo className="text-white  text-[26px] mt-1" /> : null}
                {props.type === 'delete' ? <RiDeleteBinLine className="text-white  text-[24px] mt-0.5" /> : null}
                {props.type === undefined || props.type === null ? (
                  <FiInfo className="text-white  text-[26px] mt-1" />
                ) : null}
                <p className="text-white mx-3 text-h5 tracking-wide heading title pt-[3px]">
                  {' '}
                  {props.title ?? props.type}
                </p>
              </div>
              <div onClick={props.handleClose} className="absolute top-4 right-4 group rounded-md">
                <div
                  className={`  ${props.type === 'success' ? ' hover:bg-[#559B24]' : ''} ${props.type === 'warning' ? ' hover:bg-[#C47C16]' : ''}
                ${props.type === 'error' ? ' hover:bg-[#E33B44]' : ''} ${props.type === 'info' ? 'hover:bg-[#3988D7] ' : ''}
                h-[20px] w-[20px] cursor-pointer duration-300  bg-[#fff] flex justify-center items-center  rounded-sm hover:bg-[#3988D7] `}
                >
                  <RiCloseFill className="text-text-color group-hover:text-white" />
                </div>
              </div>
              <div
                className={` min-h-fit  ${props.width === 'sm' ? 'max-h-[30vh] overflow-auto ' : ''} ${props.width === 'md' ? (props.height === true ? 'lg:max-h-[60vh] overflow-auto' : 'max-h-[40vh] overflow-auto ') : ''} ${props.width === 'lg' ? 'max-h-[50vh] overflow-auto' : ''}  ${props.width === 'xl' ? 'max-h-[80vh] overflow-auto' : ''}`}
              >
                {props.errormessage ? (
                  <div>
                    <p className="w-[80%]  mx-auto text-text-color pt-6 text-center text-base pb-6 text-ellipsis break-words">
                      {' '}
                      {props.errormessage}
                    </p>
                  </div>
                ) : (
                  <div className="px-3 w-full">{props.children}</div>
                )}
              </div>
              {props.actionbar ? (
                <div className="bg-gray-bg py-2 px-1 bottom-0 position-fixed">
                  <div className="flex py-1 justify-end gap-2 ">
                    <button
                      onClick={props.handleDelete && props.delete ? props.handleDelete : props.handleClose}
                      disabled={props.disabled}
                      ref={closeRefname}
                      autoFocus={true}
                      className={`bg-[#E33B44] text-white hover:bg-absent-color  text-tiny cursor-pointer  rounded-sm px-8  py-1`}
                    >
                      {props.handleDelete && props.delete ? 'Delete' : 'Close'}
                    </button>
                    <button
                      onClick={props.handleSave}
                      disabled={props.savedisabled}
                      autoFocus={true}
                      ref={saveRefname}
                      className=" bg-primary text-tiny mx-2  rounded-sm  hover:bg-loginbg  text-white px-8 py-1"
                    >
                      {props.buttonname ?? 'Save'}
                    </button>
                  </div>
                </div>
              ) : null}
              {props.type === 'success' ? <div className="h-1  loading bg-[#559B24]"></div> : <></>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
PopUp.propTypes = {
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success', 'info', 'delete']),
  width: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  height: PropTypes.bool,
  title: PropTypes.string,
  errormessage: PropTypes.string,
  children: PropTypes.node,
  actionbar: PropTypes.bool,
  handleDelete: PropTypes.func,
  delete: PropTypes.bool,
  disabled: PropTypes.bool,
  handleSave: PropTypes.func,
  buttonname: PropTypes.string
};
PopUp.defaultProps = {
  type: 'info',
  width: 'sm',
  height: false
  // ... (other default values)
};