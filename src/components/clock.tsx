"use client"

import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export default function Clock({timeZone, currentTimeZoneOffset}: {timeZone:number, currentTimeZoneOffset:number}) {
    const [time, setTime] = useState("00:00:00");
    useEffect(() => {
      
      //console.log(currentTimeZone);
      //console.log("My Timezone: "+ currentTimeZone + " Files Timezone: "  + timeZone);
      const i = setInterval(() => {
        const d = new Date(Date.now() + (currentTimeZoneOffset + timeZone)*1000);
        setTime(`${d.getHours().toString().padStart(2,"0")}:${d.getMinutes().toString().padStart(2,"0")}:${d.getSeconds().toString().padStart(2,"0")}`);
      }, 1000);
      return (() => clearInterval(i))
    }, [timeZone, currentTimeZoneOffset]);
  
    return (<div className="w-[8ch] text-center my-auto  font-bold text-white">{time}</div>)
  }