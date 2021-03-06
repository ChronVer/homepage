"use strict";



//  I M P O R T S

import fs from "graceful-fs";
import jsYaml from "js-yaml";

//  U T I L

const yamlRegex = /^(-{3}(?:\n|\r)([\w\W]+?)(?:\n|\r)-{3})?([\w\W]*)*/;



//  P R O G R A M

jsYaml.parse = text => {
  const results = text.match(yamlRegex);
  const yamlOrJson = results[2]; // yamlOrJson = results.input;
  let conf;

  if (yamlOrJson.charAt(0) === "{")
    conf = JSON.parse(yamlOrJson);
  else
    conf = jsYaml.load(yamlOrJson);

  return conf;
};

jsYaml.loadFront = context => {
  let contents;

  switch(true) {
    case fs.existsSync(context):
      contents = fs.readFileSync(context, "utf8");

      if (contents instanceof Error)
        return contents;

      return jsYaml.parse(contents);

    case Buffer.isBuffer(context):
      return jsYaml.parse(context.toString());

    default:
      return jsYaml.parse(context);
  }
};



//  E X P O R T

export default jsYaml;
