import { combineReducers } from "redux";
import {  openWeatherReducer } from "./weatherReducer";
// weatherReducer , 

export default combineReducers({
  // weather : weatherReducer ,
  openWeather: openWeatherReducer,
});
