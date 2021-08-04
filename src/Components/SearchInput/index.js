import React, { useState } from "react";
import { Months, HeadersObject } from "../../Assets/constants";

const GetFilterBody = ({ activeId, data, apps, ...props }) => {
  const [query, setQuery] = useState("");

  const [arr, setArr] = useState(apps.map((el) => el["app_name"]));
  const handleChange = (e) => {
    let query = e.target.value;

    if (query === "") {
      var suggestedArray = apps.map((el) => el["app_name"]);
    } else {
      var suggestedArray = [...arr].filter(
        (el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    }

    setArr(suggestedArray);

    setQuery(query);
  };
  const setItem = (value) => {
    setQuery(value);
  };

  return (
    <div>
      <input
        name="query"
        type="text"
        className="query-input border rounded"
        placeholder="Type to search"
        value={query}
        onChange={handleChange}
      />
      <div clssName="suggestions-wrapper">
        {arr.map((el, index) => (
          <div
            key={index}
            className="dropdown-item pointer"
            onClick={() => setItem(el)}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="filter-footer">
        <button
          className="primry-button"
          onClick={() =>
            props.applyFilter(
              apps.filter((el) => el["app_name"] === query).length > 0
                ? apps.filter((el) => el["app_name"] === query)[0]["app_id"]
                : ""
            )
          }
        >
          Apply
        </button>
      </div>
    </div>
  );
};
const RangeSelector = ({ activeId, data, apps, ...props }) => {
  const [values, setValues] = useState({
    start: Math.min(...data.map((el) => el[activeId])),
    end: Math.max(...data.map((el) => el[activeId])),
  });
  const handleRangeChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input type="range" onChange={handleRangeChange}></input>
      <div className="range-indicators">
        <div>{values.start}</div>
        <div>{values.end}</div>
      </div>
      <div className="filter-footer">
        <button
          className="primry-button"
          //   onClick={() =>
          //     props.applyFilter(
          //       apps.filter((el) => el["app_name"] === query).length > 0
          //         ? apps.filter((el) => el["app_name"] === query)[0]["app_id"]
          //         : ""
          //     )
          //   }
        >
          Apply
        </button>
      </div>
    </div>
  );
};
const Index = (props) => {
  switch (HeadersObject[props.activeId]["type"]) {
    case "string":
      return GetFilterBody(props);
    default:
      return RangeSelector(props);
  }
  return;
};

export default Index;
