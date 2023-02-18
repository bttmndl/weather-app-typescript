import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Props {
  inputValue : string,
}

interface Country {
  capital: string;
  population: number;
  latlng: string,
  flag: string;
}

const MainContent:React.FC <Props>= ({inputValue}) => {
  const [weatherCountryData, setWeatherCountryData] = useState<Country[]>();

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
          <div className='main_content_inner'>
            <h1>{ele.capital}</h1>
            <h2>{ele.population}</h2>
            <h2>{ele.latlng}</h2>
            <h2>{ele.flag}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default MainContent