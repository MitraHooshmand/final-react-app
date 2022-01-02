import React,{useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";
import axios from "axios";
export default function WeatherForcast(props) {
    let [loaded,setLoaded]=useState(false);
    let [forcast,setForcast]=useState(null);
function handleResponse(response){
// console.log(response.data.daily);

    setForcast(response.data.daily);
    setLoaded(true);
}

if (loaded){
    console.log(forcast);
     return (
       <div className="WeatherForcast">
         <div className="row">
           <div className="col">
             <div className="WeatherForcast-day">
               Thu
               <div />
               <WeatherIcon code="01d" size="28" />
               <div className="WeatherForcast-temprature">
                 <span className="WeatherForcast-temprature-max">
                   {forcast[0].temp.max}°
                 </span>
                 <span className="WeatherForcast-temprature-min">
                   {forcast[0].temp.min}°
                 </span>
               </div>
             </div>
           </div>
         </div>
       </div>
     );
}else{

let apiKey = "9a740d7fbaf516b932eb59f405516e16";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return null;
}

 
}
