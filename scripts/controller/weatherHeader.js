"use strict";
import { getData } from "../api/apiRequest.js";

export default class WeatherHeader {
  constructor(timeElem, cityElem, dateElem) {
    this.timeElem = timeElem;
    this.cityElem = cityElem;
    this.dateElem = dateElem;
  }
  init() {
    this.getWeatherData();
  }

  async getWeatherData() {
    const data = await getData();
    console.log("weatherHeader", data);
    this.showDetails(data);
  }

  showDetails(data) {
    // console.log(data);
    const city = data.city;
    this.cityElem.innerText = city.name;
    this.showCurrentDate();

    setInterval(() => {
      this.showCurrentTime();
    }, 1000);
  }
  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  showCurrentTime() {
    const time = new Date();
    let cHour = this.addZero(time.getHours());
    let cMin = this.addZero(time.getMinutes());
    let csek = this.addZero(time.getSeconds());
    const timeString = cHour + ":" + cMin + ":" + csek;
    this.timeElem.innerText = timeString;
  }

  showCurrentDate() {
    const date = new Date();
    let cDay = this.addZero(date.getDate());
    let cMonth = this.addZero(date.getMonth() + 1);
    let cYear = this.addZero(date.getFullYear());
    const dateString = cDay + "." + cMonth + "." + cYear;
    this.dateElem.innerText = dateString;
  }
}
