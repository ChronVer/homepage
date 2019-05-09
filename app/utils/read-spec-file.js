"use strict";



//  N A T I V E

import { readFile } from "fs";

//  U T I L

import { specPath } from "~util";



//  E X P O R T

export default async(suppliedData) => {
  const specId = suppliedData;
  const specFilepath = `${specPath}/v${specId}.md`;

  return new Promise(resolve => readFile(specFilepath, "utf8", (err, data) => {
    if (err) {
      // console.error(err); // eslint-disable-line no-console
      resolve("");
    }

    resolve(data);
  }));
};
