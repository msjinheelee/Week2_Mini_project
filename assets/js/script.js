

let name = prompt("Hello, What is your name?");
alert("Hello, " + name + "!");

const info = require('info');

// TODO: Add comments to explain each of the three arguments of appendFile() \n means new line
info.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
