"use strict";



//  U T I L

import { siteRepo, siteVersion } from "~util";



//  E X P O R T

export default () => {
  return [
    "<footer class='footer inner-wrap'>",
    `v${siteVersion} | <a href='${siteRepo}' title='View the source of this website'>Source</a>`,
    "</footer>"
  ].join("");
};
