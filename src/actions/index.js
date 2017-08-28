import axios from 'axios';

const API_KEY = 'f1aba991c88c4af997c65af84bfd2b72';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ph`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}