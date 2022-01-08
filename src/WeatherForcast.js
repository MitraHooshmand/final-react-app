import React,{useState,useEffect} from "react";

import WeatherForcastDay from "./WeatherForcastDay";
import "./WeatherForcast.css";
import axios from "axios";
export default function WeatherForcast(props) {
    let [loaded,setLoaded]=useState(false);
    let [forcast,setForcast]=useState(null);
    useEffect(() => {
      setLoaded(false);
    },[props.coordinates]);
function handleResponse(response){
 //console.log(response.data.daily);

    setForcast(response.data.daily);
    setLoaded(true);
}
  

if (loaded){
  //  console.log(forcast);
     return (
       <div className="WeatherForcast">
         <div className="row">
           {forcast.map(function (dailyForcast, index) {
            if (index<5){
            return (
               <div className="col" key={index}>
                 <WeatherForcastDay data={dailyForcast} />
               </div>
             );
            }else{
              return null;
            }
           })}
           
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
