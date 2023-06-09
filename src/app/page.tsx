"use client"


import { useEffect, useState } from "react";

import MainDataBlockIn from "../components/mainDataBlockIn";
import BlockOut from "../components/blockOut"
import Clock from "@/components/clock";
import FullDayBlockIn from "../components/weatherDataBlockIn"

import weatherData from "../data/weather.json"
import { debug } from "console";
import SearchBar from "@/components/searchBar";



import Image from "next/image";

import Badge from "@/components/gitHubBadge";


const weatherKey = process.env.NEXT_PUBLIC_WEATHER_KEY as string


async function FetchData(value:string) {
  


  const defaultEndpoint=`https://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${weatherKey}`;
  const locationRes = await fetch(defaultEndpoint);
  const locationData = await locationRes.json();
  const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${locationData[0].lat}&lon=${locationData[0].lon}&appid=${weatherKey}`
  const weatherRes = await fetch(weatherEndpoint);
  const weatherData = await weatherRes.json();

  return (
    [locationData, weatherData]
  )
}






export default function Home() {
  const currentTimeZoneOffset = new Date().getTimezoneOffset() * 60;
  const [Today, setToday] = useState("Loading");
  let [location, setLocation] = useState("Kyiv");
  let [locationData, setLocationData] = useState(undefined as undefined | any);
  let [weatherData, setWeatherData] = useState(undefined as undefined | any);
  useEffect(() => {
    const TodayUnix = new Date(weatherData ? weatherData.dt *1000 : 0)
    setToday(TodayUnix.getDate() + "." + (TodayUnix.getMonth() + 1) + "." + TodayUnix.getFullYear()) 
  }, [weatherData])

  useEffect(() => {FetchData(location).then((res) => {console.log(res);setLocationData(res[0] ); setWeatherData(res[1]);})}, [location]);



  return (
        
        <div>
            <div className="bottom-0 left-3 grid grid-rows-2 absolute ">
            <Badge user="DanyBorysenko" />
            <Badge user="davidHarwardt" />

            </div>
            

            <div className={`items-center justify-center  grid grid-rows-4 top-0`}>
          <SearchBar onSubmit={(value) => setLocation(value)}/>
          <div className="flex flex-row justify-center">
            <Image
              src="/logo.png"
              width={250}
              height={250}
              alt="q-weather Logo"
              className=""
            />
          <h1 className="text-center my-auto text-7xl font-bold text-white">quick-weather</h1>
        
          </div>
          
          <BlockOut>
            <MainDataBlockIn> 
               {[locationData ?  locationData[0].name.toString() : "Loading", 
               <div key = "Time" className="grid grid-rows-2">
                <Clock currentTimeZoneOffset={currentTimeZoneOffset} timeZone={weatherData ? weatherData.timezone : 0} />
                <p className="mt-3 text-5xl font-bold text-white text">{Today}</p>
              </div>,
              <div key = "Weather" className="grid grid-rows-2">
                  <p className="mt-3 text-5xl font-bold text-white text">{weatherData ? `${(weatherData.main.temp - 273.5).toFixed(1)}°C` : "Loading"}</p>
                <p className="mt-3 text-5xl font-bold text-white text">{weatherData ? weatherData.weather[0].main : "Loading"}</p>

              </div> 
              ]}  
            </MainDataBlockIn>
          </BlockOut>
          <BlockOut>
              <FullDayBlockIn currentTimeZoneOffset={currentTimeZoneOffset} timeZone={weatherData ? weatherData.timezone: 0}/>             
          </BlockOut>
          
          </div> 

          
        </div>
                                
  )
}
