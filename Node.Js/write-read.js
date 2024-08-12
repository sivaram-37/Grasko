const fs = require("fs");

fs.writeFile("userData.txt", "Hello from Node.js...!!!", (err) => {
  return err ? console.log(err) : console.log("Write to file is completed.!");
});

fs.readFile("userData.txt", (err, data) => {
  return err ? console.log(err) : console.log(data.toString());
});
