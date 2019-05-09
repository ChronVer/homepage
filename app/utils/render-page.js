"use strict";



//  I M P O R T S

import { minify } from "html-minifier";
import viper from "viperhtml";

//  U T I L S

import footer from "~component/footer";
import head from "~component/head";
import navigation from "~component/navigation";
import { minifyOptions } from "~util";
import wrapper from "~component/wrapper";

const asyncRender = viper.async();



//  E X P O R T

export default async({ requestObject, requestResponse, headContent, bodyContent }) => {
  const layout = await wrapper(
    asyncRender(), {
      head: {
        html: head(headContent)
      },
      body: [
        collectBody(requestObject, bodyContent)
      ]
    }
  );

  try {
    requestResponse.send(
      minify(layout.join(""), minifyOptions)
    );
  } catch(error) {
    // TODO: Return 500 error page
    return "Something strange happened. Try again later.";
  }
};



//  H E L P E R

async function collectBody(requestObject, bodyContent) {
  if (!bodyContent)
    return [];

  // TODO: Pass route to navigation

  if (typeof bodyContent === "function") {
    return [
      await navigation(),
      await bodyContent(requestObject),
      footer()
    ];
  }

  return [
    await navigation(),
    bodyContent,
    footer()
  ];
}
