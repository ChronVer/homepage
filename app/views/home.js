"use strict";



//  N A T I V E

import path from "path";
import { readFile, readFileSync } from "fs";

//  I M P O R T

import cwd from "cwd";
import marked from "marked";

//  U T I L S

import {
  markedOptions,
  readSpecDirectory,
  specParser
} from "~util";

const modules = readFileSync(path.join(cwd(), "modules.md"), "utf8");
const specPath = cwd() + "/spec";

marked.setOptions({
  ...markedOptions,
  renderer: new marked.Renderer()
});



//  E X P O R T

export default async() => {
  const allSpecVersions = await readSpecDirectory();
  const currentVersion = allSpecVersions.slice(-1).pop();

  return new Promise(resolve => readFile(path.join(specPath, currentVersion), "utf8", (err, data) => {
    if (err) { // TODO: Show error page
      // console.error(err); // eslint-disable-line no-console
      resolve("Oof owie");
    }

    const {
      metadata,
      spec
    } = specParser(data);

    resolve(`
      <main>
        <header class="inner-wrap">
          <h1 id="chronologic-versioning">${metadata.title}</h1>
        </header>

        <section class="inner-wrap">
          ${marked(spec)}
        </section>

        <section class="inner-wrap">
          ${marked(modules)}
        </section>
      </main>
    `);
  }));
};
