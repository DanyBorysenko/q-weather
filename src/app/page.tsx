import DayProgress from "../components/dayProgress"
import BlockIn from "../components/blockIn";
import BlockOut from "../components/blockOut"
import Clock from "@/components/clock";

export default function Home() {

  var currentTime = new Date();
  var timeInMin = currentTime.getHours() * 60 + currentTime.getMinutes();

    

  return (
        <div className="items-center justify-center bg-blue-700 h-screen grid grid-rows-4 top-0">
          <h1 className="text-center my-auto text-7xl font-bold text-white">q-weather.com</h1>
          <BlockOut>
            <BlockIn>
              {["Kyiv", <Clock key = "clock"/>, "30°C",]}
            </BlockIn>
          </BlockOut>
          <BlockOut>
              <div className="px-10">
                <DayProgress />
                
                <div className="grid grid-cols-24">
                  {new Array(24).fill(0).map((hour, i) => {return <div key={i} className="font-bold text-white">{(hour + i < 10) ? `0${hour + i}`: (hour + i).toString()}</div>}) }
                </div>
              </div>
              
          </BlockOut>
          </div>                           
  )
}
