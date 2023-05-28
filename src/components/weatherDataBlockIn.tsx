import DayProgress from "./dayProgress"

export default function FullDay({timeZone, currentTimeZoneOffset}: {timeZone:number, currentTimeZoneOffset:number}) {
        return (
            <div className="px-10">
                <DayProgress currentTimeZoneOffset={currentTimeZoneOffset} timeZone={timeZone}/>
                
                <div className="grid grid-cols-24">
                  {new Array(24).fill(0).map((hour, i) => {return <div key={i} className="font-bold text-white">{(hour + i < 10) ? `0${hour + i}`: (hour + i).toString()}</div>}) }
                </div>
              </div>
        );
}
