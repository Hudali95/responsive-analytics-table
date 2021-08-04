export const applyHeaderFilters = (arr) => {
  return {
    type: "APPLY_HEADER_FILTERS",
    payload: arr,
  };
};
