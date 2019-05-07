"use strict";



//  U T I L S

import {
  defaultMetadata,
  readSpecDirectory,
  renderPage
} from "~util";

import landing from "~view/home";



//  E X P O R T

export default async(requestObject, requestResponse) => {
  const allSpecVersions = await readSpecDirectory();
  const currentVersionFilename = allSpecVersions.slice(-1).pop();
  const currentVersion = currentVersionFilename.split(".md")[0];
  const customHeadContent = [];

  customHeadContent.push({
    title: defaultMetadata.title + defaultMetadata.separator + currentVersion
  });

  return renderPage({
    requestObject,
    requestResponse,
    headContent: customHeadContent,
    bodyContent: landing
  });
};
