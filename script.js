// console.log("Hello world");
// console.log(process.argv);

// let args = process.argv;
// for (let i = 2; i < args.length; i++) {
//     console.log("Hello and Welcome ", args[i]);
// }

//Require Keyword
// const math = require("./math");
// console.log(math);

// console.log(math.sum(2, 2));
// console.log(math.PI);

// const info = require("./Fruits");
// console.log(info);

// const figlet = require("figlet");

// figlet("Ayush rai", function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });

//Import keyword
// import { sum, PI , g, mul} from "./math.js"

// console.log(sum(1, 2));

import { generate, count } from "random-words";
console.log(generate());