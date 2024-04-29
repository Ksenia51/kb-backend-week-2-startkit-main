const http = require("http");
const path = require("path");
const {
  gameRouteController,
  mainRouteController,
  defaultRouteController,
  voteRouteController
} = require("./controllers");

module.exports = gameRouteController;

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
      const extname = String(path.extname(url)).toLowerCase();
      if (extname in mimeTypes) {
        staticFile(res, url, extname);
      } else {
        res.statusCode = 404;
        res.end("Not Found");
      }
  }
});

