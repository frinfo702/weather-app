"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const API_KEY = '6112b000ab354917af0133945241105';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';
async function getWeather(city) {
    try {
        const response = await axios_1.default.get(`${BASE_URL}?key=${API_KEY}&q=${city}&aqi=no`);
        console.log(`現在の${city}の天気: ${response.data.current.condition.text}`);
        console.log(`気温: ${response.data.current.temp_c}度`);
    }
    catch (error) {
        console.error('天気情報の取得に失敗しました:', error);
    }
}
// コマンドライン引数から都市名を取得
const city = process.argv[2];
getWeather(city);
