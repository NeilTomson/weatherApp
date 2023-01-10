import React, { useState, useEffect } from "react";
import axios from "axios";

function Card(location, toggle) {
  const [data, setData] = useState("");
  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location.location}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);

    });
  }, []);


  return (
    <div className="border-solid border-2 border-white-500 p-8 bg-slate-800/[.5] rounded-xl h-75 w-3/4 md:w-96 ">
  
      <p className="text-white text-3xl text-bold font-bold	underline mb-4 ">
        {data?.name}
      </p>
      <p className="text-white text-6xl text-bold">{data.weather?.[0].main}</p>
      <p className="text-white text-xl text-bold">
        country:{data.sys?.country}
      </p>
      <div className="flex flex-col justify-evenly mt-5">
        <div className="flex flex-row justify-evenly mt-2">
          <p className="text-white text-xl text-bold ">
            tem:{data.main?.temp.toFixed()}°C
          </p>
          <p className="text-white text-xl text-bold">
            min:{data.main?.temp_min.toFixed()}°C
          </p>
        </div>
        <div className="flex flex-row justify-evenly mt-2">
          <p className="text-white text-xl text-bold">
            max:{data.main?.temp_max.toFixed()}°C
          </p>
          <p className="text-white text-xl text-bold">
            wind:{data.wind?.speed.toFixed()}
          </p>

        </div>
      </div>
    </div>
  );
}

export default Card;
