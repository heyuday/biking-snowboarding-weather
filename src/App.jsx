import { useEffect, useState } from "react";
import './App.css';
import UilReact from "@iconscout/react-unicons/icons/uil-react"
import TopButton from './components/TopButton';
import TimeAndLocation from './components/TimeAndLocation';
import Inputs from './components/Inputs';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';

function App() {

  const [query, setQuery] = useState({ q: "Slinger, US" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [isSnowboarding, setIsSnowboarding] = useState(false);


  const getWeather = async () => {
    await getFormattedWeatherData({...query, units}).then(data => {
      setWeather(data)
    })
  }

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };
  

  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 font-bold text-white transition ease-out hover:scale-105 rounded-md ${isSnowboarding ? '' : 'bg-blue-500'}`}
          onClick={() => setIsSnowboarding(false)}
        >
          Mountain Biking
        </button>
        <button
          className={`px-4 py-2 font-bold text-white transition ease-out hover:scale-105 rounded-md ${isSnowboarding ? 'bg-blue-500' : ''}`}
          onClick={() => setIsSnowboarding(true)}
        >
          Snowboarding
        </button>
      </div>

      <TopButton setQuery={setQuery} isSnowboarding={isSnowboarding} />
      <Inputs setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
