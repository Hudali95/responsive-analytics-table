import React, { useState, useRef } from "react";
import { HeadersObject } from "../../Assets/constants";

import GetFilterBody from "../SearchInput";
import TableComponent from "../TableComponent";
import { connect } from "react-redux";

import OptionsContainer from "../OptionsContainer";
import { FaCalendarAlt } from "react-icons/fa";
import { GoSettings } from "react-icons/go";

function Index(props) {
  const [data, setData] = useState(props.data);
  const [showOptions, setShowOptions] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const inputRef = useRef();
  const [filterPosition, setFilterPosition] = useState({
    left: 0,
    top: 0,
    active_id: "",
  });

  const applyFilter = (filter, activeId) => {
    if (HeadersObject[activeId].type === "string") {
      setData([...props.data.filter((el) => el["app_id"] === filter)]);
    } else {
      setData([
        ...props.data.filter(
          (el) => el[activeId] >= filter.start && el[activeId] <= filter.end
        ),
      ]);
    }
  };
  const datepickerClick = () => {
    // inputRef.current.click();
  };
  return (
    <>
      <div className="content-layout analytics-layout">
        <h2>Analytics</h2>
        <div className="analytics-header-bar">
          <button
            className="date-picker options-button border rounded "
            onClick={() => datepickerClick()}
          >
            {/* <input type="date" placeholder="date" ref={inputRef}></input> */}
            <span className="option-icon">
              <FaCalendarAlt />
            </span>
            Date Picker
          </button>
          <button
            className="settings-button  options-button border rounded"
            onClick={() => setShowOptions(true)}
          >
            <span className="option-icon">
              <GoSettings />
            </span>
            Setting button
          </button>
        </div>
        {showOptions && (
          <OptionsContainer onCancel={() => setShowOptions(false)} />
        )}
        <div className="analytics-main-content">
          <div className="table-wrapper">
            <TableComponent
              setFilterPosition={setFilterPosition}
              setShowFilter={setShowFilter}
              source={data}
            />
          </div>
        </div>
      </div>
      {showFilter && (
        <div className="overlay" onClick={() => setShowFilter(false)}>
          <div
            className="filter border rounded"
            style={{
              left: filterPosition.left,
              top: filterPosition.top,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="filter-header">Filter</div>
            <GetFilterBody
              activeId={filterPosition.active_id}
              applyFilter={applyFilter}
            />
          </div>
        </div>
      )}
    </>
  );
}
const mapStatesToProps = (state) => {
  return {
    ...state,
    data: state.responseData,
    headers: state.headers,
    apps: state.apps,
  };
};
export default connect(mapStatesToProps, null)(Index);
