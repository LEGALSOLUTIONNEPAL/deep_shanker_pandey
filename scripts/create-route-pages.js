const fs = require("fs");
const path = require("path");

const buildDirectory = path.resolve(__dirname, "..", "build");
const sourceIndex = path.join(buildDirectory, "index.html");
const routes = ["publications", "projects", "cv"];

for (const route of routes) {
  const routeDirectory = path.join(buildDirectory, route);
  fs.mkdirSync(routeDirectory, {recursive: true});
  fs.copyFileSync(sourceIndex, path.join(routeDirectory, "index.html"));
}

console.log(`Created static entry pages for: ${routes.join(", ")}`);
