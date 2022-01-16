import React from "react";
import * as contentful from "contentful";

// console.log(process.env);

export const client = contentful.createClient({
  space: process.env.REACT_APP_API_ID,
  environment: "master",
  accessToken: process.env.REACT_APP_API_KEY,
});

// console.log(process.env.REACT_APP_API_KEY);
