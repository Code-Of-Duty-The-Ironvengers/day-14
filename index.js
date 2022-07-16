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
// const server2 = http.createServer((request, response) => {
//   response.write("Funny question");
//   response.end();
// });

server.listen(3000, () => {
  console.log(`Done, we're up and running`);
  console.log(chalk.bgBlue.redBright("YUUHUUU"));
});

// server2.listen(3001, () => {
//   console.log("SERVER 2 IS RUNNING");
// });

// NPM Node Package Manager
