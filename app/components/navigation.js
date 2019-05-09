"use strict";



//  I M P O R T

import compare from "alphabetic-compare";

//  U T I L S

import {
  readSpecDirectory,
  versionedFilenameRegex
} from "~util";



//  E X P O R T

export default async() => {
  const allSpecVersions = await readSpecDirectory();
  const reverseSort = allSpecVersions.sort((a, b) => compare(b, a, "en"));

  createNavigation(reverseSort);

  return [
    "<nav class='navigation inner-wrap'>",
    createNavigation(reverseSort)
      .map(navigationItem => {
        return `
          <a
            href="${navigationItem.url}"
            title="View spec version ${navigationItem.name}"
          >
            ${navigationItem.name}
          </a>
        `;
      })
      .join(""),
    "</nav>"
  ].join("");
};



//  H E L P E R

function createNavigation(suppliedData) {
  const finalArray = [];

  suppliedData.forEach(datapoint => {
    if (datapoint.match(versionedFilenameRegex)) {
      datapoint = datapoint.slice(1, -3); // remove beginning "v" and ending ".md"

      finalArray.push({
        name: datapoint,
        url: `/spec/${datapoint}`
      });
    }
  });

  return finalArray;
}
