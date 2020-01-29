"use strict";



//  U T I L

import { siteRepo, siteVersion } from "~util";



//  E X P O R T

export default () => {
  return [
    "<footer class='footer inner-wrap'>",
    `site version ${siteVersion} | <a href='${siteRepo}' title='View the source of this website'>source</a>`,
    "</footer>"
  ].join("");
};
