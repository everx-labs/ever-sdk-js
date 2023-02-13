const fs = require("fs");
const path = require("path");
const version = JSON.parse(fs.readFileSync(
    path.resolve(__dirname, "package.json"),
    "utf8",
)).version;
fs.writeFileSync(
    path.resolve(__dirname, "src", "version.ts"),
    `export const packageVersion = "${version}";`,
);
