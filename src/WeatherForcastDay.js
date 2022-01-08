import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcastDay(props){
    function maxTemprature(){
        let temprature = Math.round(props.data.temp.max);
        return `${temprature}°`;
    }
     function minTemprature() {
       let temprature = Math.round(props.data.temp.min);
       return `${temprature}°`;
     }
     function day (){
         let date = new Date (props.data.dt*1000);
         let day = date.getDay();
         let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
         
         return days[day];
     }
    return (
      <div>
        <div className="WeatherForcast-day">
          {day()}
          <div />
          <WeatherIcon code={props.data.weather[0].icon} size="28" />
          <div className="WeatherForcast-temprature">
            <span className="WeatherForcast-temprature-max">
              {maxTemprature()}
            </span>
            <span className="WeatherForcast-temprature-min">
              {minTemprature()}
            </span>
          </div>
        </div>
      </div>
    );
}