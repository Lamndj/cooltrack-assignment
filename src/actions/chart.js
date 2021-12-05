import axios from "axios";
import { API_ENDPOINT } from "../constants/apiConstants";

export const fetchChartData = async (dispatch) => {
  const res = await axios.get(API_ENDPOINT).catch((err) => {
    dispatch({
      type: "FETCH_CHART_DATA_ERR",
      payload: err.response,
    });
  });

  if (res?.data) {
    dispatch({
      type: "FETCH_CHART_DATA",
      payload: res.data,
    });
  }
};
