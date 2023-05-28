"use client"

import React from "react";

export default function SearchBar( {onSubmit}: {onSubmit:(result: string) => void}) {

    const [searchResult, SetSearchResult] = React.useState("");

    return (
        <form className="mx-auto shadow-2xl" onSubmit={e =>{e.preventDefault(); onSubmit(searchResult)}}>
            <input className=" mx-auto h-16 w-256 rounded-md p-10"type="text" placeholder="Search for Location (e.g. City, Region)" onChange={e => SetSearchResult(e.target.value)}/>
        </form>
        
    )
        
    
}