"use strict ";

import WeatherHeader from "./scripts/controller/weatherHeader.js";
import WeatherList from "./scripts/controller/weatherlist.js";

const weatherHeader = new WeatherHeader(
  document.querySelector("#header__time"),
  document.querySelector("#header__city"),
  document.querySelector("#header__date")
);
weatherHeader.init();

const weatherList = new WeatherList(document.querySelector("#weather__list"));
weatherList.init();
