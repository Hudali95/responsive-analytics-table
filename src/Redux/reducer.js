const initialState = {
  responseData: [
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
  ],
  headers: [
    "date",
    "app_id",
    "clicks",
    "requests",
    "revenue",
    "fillRate",
    "Ctr",
  ],
  apps: [
    { app_id: "123456", app_name: "Panda Draw" },
    { app_id: "789652", app_name: "Number Ninja" },
    { app_id: "741553", app_name: "Word Crush" },
    { app_id: "986321", app_name: "Brain Quiz" },
    { app_id: "320248", app_name: "Age Calculator" },
  ],
};

function login(state = initialState, action) {
  switch (action.type) {
    case "APPLY_HEADER_FILTERS":
      console.log("calling", state.headers, action.payload);
      return {
        ...state,
        headers: [...action.payload],
      };
    default:
      return state;
  }
}

export default login;