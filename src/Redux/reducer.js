const initialState = {
  responseData: [],
  headers: [
    "date",
    "app_id",
    "clicks",
    "requests",
    "revenue",
    "fillRate",
    "Ctr",
  ],
  apps: [],
};

function login(state = initialState, action) {
  switch (action.type) {
    case "APPLY_HEADER_FILTERS":
      return {
        ...state,
        headers: [...action.payload],
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        responseData: action.payload,
      };
    case "GET_APPS_SUCCESS":
      return {
        ...state,
        apps: action.payload,
      };
    default:
      return state;
  }
}

export default login;
