"use stickt";

import { auth } from "../../auth.js";

const sendApiRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(method, url);
    req.responseType = "json";
    req.onload = () => {
      resolve(req.response);
      // console.log(req.response);
    };
    req.send();
  });
  return promise;
};

export async function getData() {
  const key = auth();
  console.log(key);

  return sendApiRequest(
    "GET",
    "https://api.openweathermap.org/data/2.5/forecast?lat=49.8989&lon=8.8444&appid=" +
      key
  ).then((responseData) => {
    return responseData;
  });
}
