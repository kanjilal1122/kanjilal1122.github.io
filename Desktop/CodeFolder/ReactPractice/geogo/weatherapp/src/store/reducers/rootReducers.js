import { combineReducers } from "redux";
import {  openWeatherReducer } from "./weatherReducer";


export default combineReducers({
  
  openWeather: openWeatherReducer,
});
