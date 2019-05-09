"use strict";



//  U T I L S

import yaml from "~module/yaml-front-matter";
const frontmatterRegex = /---.*([\s\S]+)---/g;



//  E X P O R T

export default suppliedData => {
  return {
    metadata: yaml.loadFront(suppliedData),
    spec: suppliedData.replace(frontmatterRegex, "").trim()
  };
};
