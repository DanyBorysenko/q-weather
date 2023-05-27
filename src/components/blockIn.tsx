

import React from "react";

export default function Block( { children}: { children:any[]}) {
 
    return (       
      <div className={`flex justify-evenly w-blockCustom h-48`}>
                
                {children.map((child, i) => <p key={i} className="text-center my-auto text-7xl font-bold text-white">{child}</p> )}                
      </div>
      
    );
}