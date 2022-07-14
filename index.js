const http = require("http"); // not my code
const chalk = require("chalk");

const sum = require("./sum"); // my code
// console.log("sum:", sum.subtract);

const ENDPOINTS = {
  aboutPage: "/about",
};

const server = http.createServer((request, response) => {
  if (request.url === ENDPOINTS.aboutPage) {
    response.write("You are in the about page");
  } else if (request.url === "/contact") {
    response.write("You are in the contact page. Please reach out");
  } else {
    response.write("HELLO!!!!");
  }

  response.end();
});

server.listen(3000, () => {
  console.log(`Done, we're up and running`);
  console.log(chalk.bgBlue.redBright("YUUHUUU"));
});

// NPM Node Package Manager
