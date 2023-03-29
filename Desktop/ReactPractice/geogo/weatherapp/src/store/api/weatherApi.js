import axios from 'axios'

export const apiKey = `ee1fc483c6ebdbf342baea4d102656b8`;
export const apiKey2 = `7899f545cf22a5512d68a9d8b7659733`;
 //export const cityName='kolkata';

 export const openCallApi = axios.create({
    baseURL:`https://api.openweathermap.org/data/2.5/`
 });

 export const directApi = axios.create({
    
     baseURL:`https://api.openweathermap.org/geo/1.0/`
 });







 