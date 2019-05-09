"use strict";



//  U T I L S

import {
  chronRegex,
  defaultMetadata,
  renderPage,
  readSpecFile
} from "~util";

import specPage from "~view/spec";



//  E X P O R T

export default async(requestObject, requestResponse) => {
  if (!requestObject.params.specId.match(chronRegex))
    return;

  const customHeadContent = [];
  const { specId } = requestObject.params;
  const specFile = await readSpecFile(specId);

  if (!specFile)
    return requestResponse.redirect("/");

  const renderedPage = await specPage(specFile);

  customHeadContent.push({
    title: defaultMetadata.title + defaultMetadata.separator + specId
  });

  return renderPage({
    requestObject,
    requestResponse,
    headContent: customHeadContent,
    bodyContent: renderedPage
  });
};
