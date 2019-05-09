"use strict";



//  I M P O R T

import marked from "marked";

//  U T I L S

import {
  markedOptions,
  specParser
} from "~util";

marked.setOptions({
  ...markedOptions,
  renderer: new marked.Renderer()
});



//  E X P O R T

export default suppliedData => {
  return new Promise(resolve => {
    const {
      metadata,
      spec
    } = specParser(suppliedData);

    resolve(`
      <main>
        <header class="inner-wrap">
          <h1 id="chronologic-versioning">${metadata.title}</h1>
        </header>

        <section class="inner-wrap">
          ${marked(spec)}
        </section>
      </main>
    `);
  });
};
