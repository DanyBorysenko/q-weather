"use client"

import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export default function Clock() {
    const [time, setTime] = useState("00:00:00");
    useEffect(() => {
      setInterval(() => {
        const d = new Date();
        setTime(`${d.getHours()}:${d.getMinutes().toString().padStart(2,"0")}:${d.getSeconds().toString().padStart(2,"0")}`);
      }, 1000);
    }, []);
  
    return (<div className="w-[8ch]">{time}</div>)
  }