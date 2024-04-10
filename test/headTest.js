const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1, 2, 3, 4]), 1);
assertEqual(head(["Yo"]), "Yo");