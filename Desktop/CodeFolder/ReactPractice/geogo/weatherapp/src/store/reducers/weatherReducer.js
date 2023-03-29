//import moment from 'moment'
import  initialState  from './initialState'

export const openWeatherReducer = (state = initialState, action) => {
  if (action.type === "FETCH_OPEN_API") {
    return {
      ...state,
      temp: Math.round(action.payload.data.current.temp),
      weather_status: action.payload.data.current.weather[0].description,
      pressure: action.payload.data.current.pressure,
      visibility: action.payload.data.current.visibility / 1000,
      humidity: action.payload.data.current.humidity,
      aqi: action.payload.data.daily[0].wind_deg,
      day: action.payload.data.current.dt,
      location: action.payload.data.timezone,
      sunset: action.payload.data.current.sunset,
      sunrise: action.payload.data.current.sunrise,
      uv_value: action.payload.data.current.uvi,
      icon: `http://openweathermap.org/img/wn/${action.payload.data.current.weather[0].icon}.png`,
      
      //Tomorrow Prediction data below
      t_day: action.payload.data.daily[0].dt,
      t_cloud_s: action.payload.data.daily[0].weather[0].main,
      t_cloud_icon: `http://openweathermap.org/img/wn/${action.payload.data.daily[0].weather[0].icon}.png`,
      t_init_temp: action.payload.data.daily[0].temp.min,
      t_final_temp: action.payload.data.daily[0].temp.max,

      //day2 code start below
      t1_day: action.payload.data.daily[1].dt,
      t1_cloud_s: action.payload.data.daily[1].weather[0].main,
      t1_cloud_icon: `http://openweathermap.org/img/wn/${action.payload.data.daily[1].weather[0].icon}.png`,
      t1_init_temp: action.payload.data.daily[1].temp.min,
      t1_final_temp: action.payload.data.daily[1].temp.max,
    };
  } else {
    return state;
  }
};
