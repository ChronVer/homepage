"use strict";



//  U T I L S

import handleRoute from "./handle-route";
import readSpecDirectory from "./read-spec-dir";
import renderPage from "./render-page";
import specParser from "./parse-spec";

const defaultMetadata = {
  author: "Paul Anthony Webb",
  color: "#0fa8eb",
  description: "Chronologic Versioning is a simple set of temporal-based rules for a versioning specification you'll actually stick to.",
  separator: " ∙ ",
  tagline: "Chronologic Versioning spec and website",
  title: "Chronologic Versioning",
  url: "https://chronver.org"
};

const isDevelopment = process.env.NODE_ENV === "development";

const markedOptions = {
  breaks: true,
  gfm: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  tables: true,
  xhtml: true
};

const minifyOptions = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  keepClosingSlash: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  sortAttributes: true,
  sortClassName: true
};



//  E X P O R T S

export {
  defaultMetadata,
  handleRoute,
  isDevelopment,
  markedOptions,
  minifyOptions,
  readSpecDirectory,
  renderPage,
  specParser
};
