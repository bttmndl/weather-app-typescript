import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';

interface Weather {
  current: {
    feelslike: number,
    temperature:number, 
    weather_icons:string[],
    wind_speed: number,
    humidity: number,
  },
  location: {
    name: string,
    country: string,
    timezone_id: string,
  }
}

const Weather:React.FC = () => {
    const {id} = useParams();
    const [weatherData, setWeatherData] = useState<Weather>()

    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`http://api.weatherstack.com/current?access_key=a12cce3d00e12302e8aaad934f587167&query=${id}`);
            setWeatherData(res.data);
        }
        getData();
    },[])

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { current, location } = weatherData;

    return (
      <div className='Main_Weather'>
        <div className="weather">
            <h2>{location.name}, {location.country}</h2>
            <div className="weather-info">
                <div className="weather-icon">
                    <img src={current.weather_icons[0]} alt="Weather Icon" />
                </div>
                <div className="weather-details">
                    <p>Temperature: {current.temperature} °C</p>
                    <p>Feels like: {current.feelslike} °C</p>
                    <p>Wind Speed: {current.wind_speed} km/h</p>
                    <p>Humidity: {current.humidity}%</p>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Weather