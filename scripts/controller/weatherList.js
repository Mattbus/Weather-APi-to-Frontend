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
        console.log("gleich");
      } else if (newprop === "") {
        newprop = prop[0];
        console.log("leer");
      } else {
        const linkElement = document.createElement("div");
        linkElement.setAttribute("id", "day__weather");
        linkElement.setAttribute("date", prop[0]);
        linkElement.classList.add("container");
        linkElement.classList.add("dayweather");
        this.weatherList.append(linkElement);
        newprop = prop[0];
      }
    }
  }
}

//für jedes Objekt, Zerlege obj.dt_text in betandteile.
//
//wenn dt_text ===

// splitMassage() {
//   const message = this.lastAlarm.message;

//   const obj = {};

//   var properties = message.split(";\r\n");
//   properties.forEach(function (property) {
//     var tup = property.split(":");
//     obj[tup[0]] = tup[1];
//   });
//   this.messageObj = obj;

//   this.output();
// }

// const linkElement = document.createElement("div");
//         linkElement.id.add = "day__weather";
//         linkElement.classList.add("container");
//         linkElement.classList.add("dayweather");
//         linkElement.innerText = result["description"];
//         console.log(linkElement);
// this.resultElement.append(linkElement);
