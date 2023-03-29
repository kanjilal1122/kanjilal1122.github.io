import { directApi, openCallApi } from "../api/weatherApi";
import { apiKey, apiKey2 } from "../api/weatherApi";

export const fetchApi = (cityName) => async (dispatch) => {
  try {
    const res = await directApi.get(`direct?q=${cityName}&appid=${apiKey}`);

    const lat = res.data[0].lat;
    const lon = res.data[0].lon;

    dispatch(openApi(lat, lon));
  } catch (error) {
    alert("You Enter Wrong city Name " +error);
  }
};

const openApi = (lat, lon) => async (dispatch) => {
  const response = await openCallApi.get(
    `onecall?lat=${lat}&lon=${lon}&appid=${apiKey2}&units=metric`
  );

  dispatch({
    type: "FETCH_OPEN_API",
    payload: {
      data: response.data,
    },
  });
};
