import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [ error, setError] = useState(false);
    const API_KEY = "73c350dea35b483282266c0641b5a5e2";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse); // ✅ This will now show the weather data like in the first image
            let result ={
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
            setCity(""); // Optional: clear input
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" onChange={handleChange} required value={city} />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color: "red"}}>No such place exits!</p>}
            </form>
        </div>
    );
}
