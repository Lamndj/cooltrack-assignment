const initialState = {
  chartData: [],
  err: null,
};

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHART_DATA": {
      return {
        ...state,
        chartData: [...action.payload],
        err: null,
      };
    }
    case "FETCH_CHART_DATA_ERR": {
      return {
        ...state,
        chartData: null,
        err: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
