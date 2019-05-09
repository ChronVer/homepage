"use strict";



//  I M P O R T S

import chew from "chewit/fastify";
import compress from "fastify-compress";
import fastify from "fastify";
import helmet from "fastify-helmet";
import statik from "fastify-static";
import style from "colorette";

//  U T I L S

import { isDevelopment, siteVersion } from "~util";
import { name as appName } from "~root/package.json";
import prepareGetRoutes from "./routes/get";

const appUrl = isDevelopment ?
  "http://localhost:4000" :
  "https://chronver.org";

const mode = isDevelopment ?
  "development" :
  "production";

export const server = fastify({
  caseSensitive: false,
  logger: {
    level: "warn",
    prettyPrint: isDevelopment
  }
});



//  P R O G R A M

server
  .register(compress)
  .register(helmet, {
    hidePoweredBy: {
      setTo: "Chronologic Versioning"
    }
  })
  .register(statik, {
    prefix: "/assets/",
    root: `${__dirname}/dist/`
  })
  .register(chew, {
    id: "5ccf7873492bb0075b0722fe" // analytics
  })
  .ready(serverReadinessError => {
    if (serverReadinessError)
      throw serverReadinessError;
  });

prepareGetRoutes(server);



//  B E G I N

const start = async() => {
  try {
    await server.listen(process.env.PORT || 4000, process.env.IP || "0.0.0.0");
  } catch(err) {
    server.log.error(err);
    process.exit(1);
  }

  process.stdout.write(`\n${style.bold(appName + " v" + siteVersion)} is running at ${style.bold(appUrl)} in mode ${style.bold(mode)}\n\n`);
};

start();
