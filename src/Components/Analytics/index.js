import React, { useState, useEffect } from "react";
import { Months, HeadersObject } from "../../Assets/constants";

function Index() {
  const [data, setData] = useState([
    {
      date: "2021-05-01T00:00:00Z",
      app_id: "123456",
      requests: 1091508,
      responses: 1091505,
      impressions: 1091410,
      clicks: 1090883,
      revenue: 7.4378356921488455,
    },
    {
      date: "2021-05-01T00:00:00Z",
      app_id: "789652",
      requests: 1018349,
      responses: 1018255,
      impressions: 1017810,
      clicks: 1016831,
      revenue: 14.189677843919222,
    },
    {
      date: "2021-05-01T00:00:00Z",
      app_id: "741553",
      requests: 1076446,
      responses: 1076437,
      impressions: 1076095,
      clicks: 1075768,
      revenue: 65.998251135585,
    },
    {
      date: "2021-05-01T00:00:00Z",
      app_id: "986321",
      requests: 1095304,
      responses: 1095255,
      impressions: 1094929,
      clicks: 1094423,
      revenue: 78.32014909794898,
    },
    {
      date: "2021-05-01T00:00:00Z",
      app_id: "320248",
      requests: 1064438,
      responses: 1064430,
      impressions: 1064273,
      clicks: 1064008,
      revenue: 141.34783729917024,
    },
    {
      date: "2021-05-02T00:00:00Z",
      app_id: "123456",
      requests: 1039359,
      responses: 1039296,
      impressions: 1039177,
      clicks: 1038975,
      revenue: 64.18850814255882,
    },
    {
      date: "2021-05-02T00:00:00Z",
      app_id: "789652",
      requests: 1088078,
      responses: 1088060,
      impressions: 1087608,
      clicks: 1086726,
      revenue: 108.3995764476501,
    },
    {
      date: "2021-05-02T00:00:00Z",
      app_id: "741553",
      requests: 1038473,
      responses: 1038467,
      impressions: 1038371,
      clicks: 1037458,
      revenue: 3.098502612750353,
    },
    {
      date: "2021-05-02T00:00:00Z",
      app_id: "986321",
      requests: 1013146,
      responses: 1013143,
      impressions: 1012952,
      clicks: 1012587,
      revenue: 79.92178015633829,
    },
    {
      date: "2021-05-02T00:00:00Z",
      app_id: "320248",
      requests: 1052209,
      responses: 1052195,
      impressions: 1052074,
      clicks: 1051342,
      revenue: 69.34246316231294,
    },
    {
      date: "2021-05-03T00:00:00Z",
      app_id: "123456",
      requests: 1022989,
      responses: 1022974,
      impressions: 1022814,
      clicks: 1022149,
      revenue: 239.60242214935016,
    },
    {
      date: "2021-05-03T00:00:00Z",
      app_id: "789652",
      requests: 1079015,
      responses: 1079006,
      impressions: 1078636,
      clicks: 1078175,
      revenue: 36.32680280799537,
    },
    {
      date: "2021-05-03T00:00:00Z",
      app_id: "741553",
      requests: 1096751,
      responses: 1096670,
      impressions: 1096402,
      clicks: 1096324,
      revenue: 111.925055305267,
    },
    {
      date: "2021-05-03T00:00:00Z",
      app_id: "986321",
      requests: 1012445,
      responses: 1012376,
      impressions: 1012018,
      clicks: 1011201,
      revenue: 184.16936005528984,
    },
    {
      date: "2021-05-03T00:00:00Z",
      app_id: "320248",
      requests: 1011938,
      responses: 1011898,
      impressions: 1011514,
      clicks: 1010854,
      revenue: 212.8627259755705,
    },
  ]);
  const [apps, setApps] = useState([
    { app_id: "123456", app_name: "Panda Draw" },
    { app_id: "789652", app_name: "Number Ninja" },
    { app_id: "741553", app_name: "Word Crush" },
    { app_id: "986321", app_name: "Brain Quiz" },
    { app_id: "320248", app_name: "Age Calculator" },
  ]);
  const [headers, setHeaders] = useState([
    "date",
    "app_id",
    "clicks",
    "requests",
    "revenue",
    "fillRate",
    "Ctr",
  ]);
  const [headerDeatils, setHaedrDeatils] = useState({ ...HeadersObject });
  // useEffect(() => {
  //   getHeader();
  // }, []);
  const getHeader = () => {
    setHeaders(Object.keys(data[0]));
  };
  const formatData = (key, paramData, index) => {
    switch (key) {
      case "app_id":
        return apps.filter((el) => el.app_id === paramData)[0].app_name;
      case "date":
        let date = new Date(paramData);

        return `${date.getDate()} ${
          Months[date.getMonth()]
        } ${date.getFullYear()}`;
      case "revenue":
        return `$${paramData.toFixed(2)}`;
      case "fillRate": {
        let current = data[index];
        return ((current.requests / current.responses) * 100).toFixed(2) + "%";
      }
      case "Ctr": {
        let current = data[index];
        return ((current.clicks / current.impressions) * 100).toFixed(2) + "%";
      }
      default:
        return formatNumberUs(paramData);
    }
  };
  const formatNumberUs = (paramData) => {
    return paramData
      .toLocaleString("en-US")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleDragStart = (e, id) => {
    e.target.classList.add("dragging");

    e.dataTransfer.setData("id", id);
  };
  const handleDragEnd = (e) => {
    e.target.classList.remove("dragging");
  };
  const handleDrop = (e) => {
    let id = e.dataTransfer.getData("id");

    let insertBefore = e.target.getAttribute("data-index");
    let item = headers[id];
    let arr = [...headers];
    arr.splice(id, 1);

    arr.splice(insertBefore, 0, item);
    setHeaders(arr);
  };
  let getTotalValue = (key) => {
    switch (key) {
      case "date":
        return "";
      case "app_id":
        return data.length;
      case "fillRate": {
        return (
          (
            data.reduce((acc, row) => {
              return acc + (row.requests / row.responses) * 100;
            }, 0) / data.length
          ).toFixed(2) + "%"
        );
      }
      case "Ctr": {
        return (
          (
            data.reduce((acc, row) => {
              return acc + (row.clicks / row.impressions) * 100;
            }, 0) / data.length
          ).toFixed(2) + "%"
        );
      }
      case "revenue": {
        return (
          "$" +
          formatNumberUs(
            data.reduce((acc, row) => {
              return acc + parseInt(row[key]);
            }, 0)
          )
        );
      }
      default:
        return formatNumberUs(
          data.reduce((acc, row) => {
            return acc + parseInt(row[key]);
          }, 0)
        );
    }
  };
  return (
    <div className="content-layout analytics-layout">
      <h2>Analytics</h2>
      <div className="analytics-header-bar">
        <button
          className="date-picker options-button border rounded "
          onClick={() => console.log("clicked")}
        >
          Date Picker
        </button>
        <button className="settings-button options-button border rounded">
          Setting button
        </button>
      </div>
      <div className="analytics-options-bar">
        <div className="columns-selector-wrapper border rounded">
          <div className="columns-selector-header">
            <h3>Dimensions and Metrics</h3>
          </div>
          <div
            className="columns-selector-body"
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.preventDefault();
            }}
          >
            {/* {Object.keys(headerDeatils).map((key, index) => (
              <div
                className="header-option pointer "
                onClick={() =>
                  headers.includes(key)
                    ? setHeaders(headers.filter((el) => el !== key))
                    : setHeaders([...headers, key])
                }
                onDragStart={(e) => handleDragStart(e, headers.indexOf(key))}
                data-index={headers.indexOf(key)}
                onDragEnd={handleDragEnd}
                draggable
              >
                {headers.includes(key) && (
                  <div className="header-option-indicator"></div>
                )}

                <div className="header-option-title border rounded ">
                  {headerDeatils[key].displayName}
                </div>
              </div>
            ))} */}
            {headers.map((key, index) => (
              <div
                className="header-option pointer border rounded "
                onClick={() =>
                  headers.includes(key)
                    ? setHeaders(headers.filter((el) => el !== key))
                    : setHeaders([...headers, key])
                }
                onDragStart={(e) => handleDragStart(e, index)}
                data-index={index}
                onDragEnd={handleDragEnd}
                draggable
              >
                {headers.includes(key) && (
                  <div className="header-option-indicator"></div>
                )}

                <div className="header-option-title  " data-index={index}>
                  {headerDeatils[key].displayName}
                </div>
              </div>
            ))}
            {Object.keys(HeadersObject)
              .filter((el) => !headers.includes(el))
              .map((el) => (
                <div
                  className="header-option pointer border rounded"
                  draggable={false}
                  onClick={() =>
                    headers.includes(el)
                      ? setHeaders(headers.filter((item) => el !== item))
                      : setHeaders([...headers, el])
                  }
                >
                  <div className="header-option-title   ">
                    {headerDeatils[el].displayName}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="analytics-main-content">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                {headers.map((key) => (
                  <th style={{ textAlign: HeadersObject[key].headAlign }}>
                    {HeadersObject[key].displayName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {headers.map((key, index) => (
                  <td
                    className="header-total"
                    style={{ textAlign: HeadersObject[key].textAlign }}
                  >
                    {getTotalValue(key, index)}
                  </td>
                ))}
              </tr>
              {data.map((row, k) => (
                <tr>
                  {headers.map((key) => (
                    <td style={{ textAlign: HeadersObject[key].textAlign }}>
                      {formatData(key, row[key], k)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Index;
