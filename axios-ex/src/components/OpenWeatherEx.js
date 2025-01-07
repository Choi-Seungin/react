import axios from "axios";
import { useRef } from "react";
export default function OpenWeatherEx() {
  const result = useRef(null);
  const getWeather = () => {
    //openweather 날씨 정보 가져오기
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = '';
    axios.get(apiUrl, {
      params: {
        appid: apiKey,
        id : '1835847'
      }
    }).then(res => {
      console.log(res.data);
      let tag = '';
      tag += `<h2>도시명 : ${res.data.name}</h2>`;
      tag += `<h2>현재 날씨 : ${res.data.weather[0].main}</h2>`;
      tag += `<h2>현재 온도 : ${(res.data.main.temp-273.15).toFixed(2)}℃</h2>`;
      tag += `<h2>최고 온도 : ${(res.data.main.temp_max-273.15).toFixed(2)}℃</h2>`;
      tag += `<h2>최저 온도 : ${(res.data.main.temp_min-273.15).toFixed(2)}℃</h2>`;
      tag += `<h2>바람 세기 : ${res.data.wind.speed}m/sec</h2>`;
      result.current.innerHTML = tag;
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      console.log("finally area");
    });
  }
  return (
    <div>
      <button onClick={getWeather}>날씨 정보 가져오기</button>
      <div ref={result}></div>
    </div>
  );
}