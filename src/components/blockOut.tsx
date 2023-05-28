import React, { ReactNode } from 'react';
import BlockIn from "./mainDataBlockIn";


export default function Block( { children }: any) {


    return (       
      <div className={`w-blockCustom h-48 rounded-3xl bg-white shadow-2xl bg-opacity-10 `}>
                {children}            
      </div>
    );
}