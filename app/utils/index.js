"use strict";



//  N A T I V E

import fs from "fs";

//  I M P O R T

import cwd from "cwd";

//  U T I L S

import handleRoute from "./handle-route";
import readSpecDirectory from "./read-spec-dir";
import readSpecFile from "./read-spec-file";
import renderPage from "./render-page";
import specParser from "./parse-spec";

const _pkg = JSON.parse(fs.readFileSync("./package.json"));

const {
  author,
  homepage,
  repository,
  version
} = _pkg;

const defaultMetadata = {
  author: author.name,
  color: "#0fa8eb",
  description: "Chronologic Versioning is a simple set of temporal-based rules for a versioning specification you'll actually stick to.",
  separator: " ∙ ",
  tagline: "Chronologic Versioning spec and website",
  title: "Chronologic Versioning",
  url: homepage
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

const chronRegex = /([0-9].[0-9].+)/g;
const siteRepo = repository.url.slice(4, -4); // remove beginning "git+" and ending ".git"
const siteVersion = version;
const specPath = cwd() + "/spec";
const versionedFilenameRegex = /(v[0-9].+(\.md))/g;



//  E X P O R T S

export {
  chronRegex,
  defaultMetadata,
  handleRoute,
  isDevelopment,
  markedOptions,
  minifyOptions,
  readSpecDirectory,
  readSpecFile,
  renderPage,
  specParser,
  siteRepo,
  siteVersion,
  specPath,
  versionedFilenameRegex
};
