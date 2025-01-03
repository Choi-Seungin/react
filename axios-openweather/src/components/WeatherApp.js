import React, { useState, useEffect } from "react";
import axios from "axios";

// 도시 목록 (영어 도시 이름)
const cities = [
    { name: "서울", value: "Seoul" },
    { name: "대전", value: "Daejeon" },
    { name: "대구", value: "Daegu" },
    { name: "부산", value: "Busan" },
    { name: "제주", value: "Jeju" },
];

// OpenWeather API Key (여기에 본인의 키를 입력하세요)
const API_KEY = ""; 

export default function WeatherApp() {
    const [selectedCity, setSelectedCity] = useState("Seoul"); // 기본값 서울
    const [weatherData, setWeatherData] = useState(null); // 날씨 데이터 상태

    // 도시가 바뀔 때마다 날씨 정보를 다시 가져오는 useEffect
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric&lang=kr`
                );
                setWeatherData(response.data); // 받아온 날씨 데이터를 상태에 저장
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setWeatherData(null); // 에러가 나면 날씨 데이터를 null로 설정
            }
        };
        fetchWeather(); // 날씨 데이터를 가져오는 함수 실행
    }, [selectedCity]); // selectedCity가 변경될 때마다 실행

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>현재 날씨 정보</h1>
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="citySelect">도시 선택: </label>
                <select
                    id="citySelect"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)} // 도시 선택 시 상태 업데이트
                >
                    {cities.map((city) => (
                        <option key={city.value} value={city.value}>
                            {city.name}
                        </option>
                    ))}
                </select>
            </div>

            {weatherData ? (
                <div>
                    <h2>{weatherData.name}의 날씨</h2>
                    <p>온도: {weatherData.main.temp}°C</p>
                    <p>체감 온도: {weatherData.main.feels_like}°C</p>
                    <p>습도: {weatherData.main.humidity}%</p>
                    <p>날씨: {weatherData.weather[0].description}</p>
                </div>
            ) : (
                <p>날씨 정보를 불러오는 중...</p>
            )}
        </div>
    );
}
