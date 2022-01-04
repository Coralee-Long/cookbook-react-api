import React from "react";
import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.REACT_APP_API_ID,
  accessToken: process.env.REACT_APP_API_KEY,
});
