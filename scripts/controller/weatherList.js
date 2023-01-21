"use strict";

import { getData } from "../api/apiRequest.js";

export default class weatherList {
  constructor(weatherList) {
    this.weatherList = weatherList;
  }
  init() {
    this.getWeatherData();
  }

  async getWeatherData() {
    const data = await getData();
    // console.log("weatherList", data.list);
    this.addObjByDate(data.list);
  }
  addObjByDate(list) {
    Object;
    let newprop = "";
    for (const obj of list) {
      let dateStr = obj.dt_txt;
      let prop = dateStr.split(" ");
      if (prop[0] === newprop) {
        newprop = prop[0];
      } else if (newprop === "") {
        newprop = prop[0];
      } else {
        const dayTitle = document.createElement("h3");
        dayTitle.classList.add("day-title");
        dayTitle.innerText = prop[0];
        const dayElement = document.createElement("div");
        dayElement.setAttribute("id", "day__weather");
        dayElement.setAttribute("date", prop[0]);
        dayElement.classList.add("container");
        dayElement.classList.add("dayweather");
        this.weatherList.append(dayTitle);
        this.weatherList.append(dayElement);
        this.setDayWeatherElem(list, dayElement);
        newprop = prop[0];
      }
    }
  }
  setDayWeatherElem(list, dayElement) {
    const elem = dayElement;
    const day = dayElement.getAttribute("date");

    for (const obj of list) {
      let dateStr_ = obj.dt_txt;
      let prop_ = dateStr_.split(" ");
      if (prop_[0] == day) {
        console.log(obj);

        const detailElem = document.createElement("div");

        detailElem.classList.add("weather-detail");
        detailElem.classList.add("container");
        detailElem.setAttribute("id", prop_[1]);
        const timeElem = document.createElement("div");
        timeElem.classList.add("time");
        timeElem.setAttribute("id", "time_" + prop_[1]);
        const timeTextElem = document.createElement("p");
        timeTextElem.innerText = prop_[1];
        timeElem.append(timeTextElem);
        detailElem.append(timeElem);

        const stateElem = document.createElement("div");
        stateElem.classList.add("state");
        stateElem.setAttribute("id", "state_" + prop_[1]);
        const stateTextElem = document.createElement("p");
        stateTextElem.innerText = obj.weather[0].description;
        stateElem.append(stateTextElem);
        detailElem.append(stateElem);

        const tempElem = document.createElement("div");
        tempElem.classList.add("state");
        tempElem.setAttribute("id", "state_" + prop_[1]);
        const tempTextElem = document.createElement("p");
        tempTextElem.innerText = obj.main.feels_like - 273;
        tempElem.append(tempTextElem);
        detailElem.append(tempElem);
        elem.append(detailElem);
      } else {
      }
    }
  }
}
