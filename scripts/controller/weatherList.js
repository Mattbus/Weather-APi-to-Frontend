"use strict";

export default class weatherList {
  constructor(weatherList) {
    this.weatherList = weatherList;
  }
  init() {
    this.getWeatherData();
  }

  async getWeatherData() {
    const data = await getData();
    this.showDetails(data);
  }
}
