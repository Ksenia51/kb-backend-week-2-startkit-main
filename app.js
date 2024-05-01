const http = require("http");
const path = require("path");
const {
  gameRouteController,
  mainRouteController,
  defaultRouteController,
  voteRouteController
} = require("./controllers");
const staticFile = require("./appModules/http-utils/static-file");
const mimeTypes = require("./appModules/http-utils/mime-types");

const PORT = 3005;

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/game":
            gameRouteController(res);
      break;
      case "/vote":
        voteRouteController(req, res);
        break;
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    default:
      defaultRouteController(res, url);
  }
});

server.listen(PORT);
