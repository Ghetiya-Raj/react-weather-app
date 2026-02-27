import { useState } from "react";
import SearchBox from './SearchBox'
import InfoBox from './Infobox'

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelslike: 36.91,
        humidity: 51,
        temp: 33.16,
        tempMax: 33.16,
        tempMin: 33.16,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo); 
    }

    return(
        <div style={{ textAlign: "center"}}>
            <h2>Weather App by Weppi</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}