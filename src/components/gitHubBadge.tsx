import Image from "next/image";

export default function Badge({user}: {user:string}) {
    
    return (
        <a className="bg-white opacity-90 rounded-lg p-1 inline-block m-2 hover:border-spacing-2 border-cyan-800 hover:scale-110" href={`https://github.com/${user}`} >
        <Image
          src="/github.png"
          width={50}
          height={50}
          alt="Github Logo"
          className=""
        />        
        </a>
    );

    
}