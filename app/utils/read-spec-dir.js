"use strict";



//  N A T I V E

import { readdir } from "fs";

//  I M P O R T

import compare from "alphabetic-compare";

//  U T I L S

import {
  chronRegex,
  specPath
} from "~util";



//  E X P O R T

export default async() => {
  return new Promise(resolve => readdir(specPath, (err, data) => {
    if (err) {
      console.error(err); // eslint-disable-line no-console
      resolve([]);
    }

    resolve(sortArray(data));
  }));
};



//  H E L P E R

function sortArray(suppliedArray) {
  const finalArray = [];

  suppliedArray.forEach(arrayItem => {
    const arrayItemTest = arrayItem.slice(1, -3); // remove beginning "v" and ending ".md"

    if (arrayItemTest.match(chronRegex))
      finalArray.push(arrayItem);
  });

  return finalArray.sort((a, b) => compare(a, b, "en"));
}
