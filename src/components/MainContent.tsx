import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Props {
  inputValue : string,
}

interface Country {
  capital: string;
  population: number;
  latlng: string,
  flags: {png:string};
}

const MainContent:React.FC <Props>= ({inputValue}) => {

  const [weatherCountryData, setWeatherCountryData] = useState<Country[]>();
  const [heart, setHeart] =useState<boolean>(false)

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await axios.get<Country[]>(`https://restcountries.com/v3.1/name/${inputValue}`);
      setWeatherCountryData(response.data);
    }

    if(inputValue) fetchData();
  }, [inputValue]);

  console.log(weatherCountryData)

  return (
    <div className='main_content'>
      {
        weatherCountryData && weatherCountryData.map((ele, idx)=>(
          <div className='card'>
            <div className="card-header">
              <i className="fa fa-heart" onClick={()=>setHeart(!heart)} style={{color: heart?"red":"white"}}></i>
            </div>
            <h1>Capital: {ele.capital}</h1>
            <h2>Population: {ele.population}</h2>
            <h2>Lat & Lang: {ele.latlng}</h2>
            <img src={ele.flags.png} alt=""/>
            <button className="see-weather-button">See Weather</button>
          </div>
        ))
      }
    </div>
  )
}

export default MainContent