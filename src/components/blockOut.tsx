import React, { ReactNode } from 'react';
import BlockIn from "../components/blockIn";


export default function Block( { children }: any) {


    return (       
      <div className={`w-blockCustom h-48 rounded-3xl bg-slate-300 bg-opacity-40 `}>
                {children}            
      </div>
    );
}