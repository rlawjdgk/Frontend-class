import { atom } from "recoil";

const x = ["a", "b", "c", "d", "e"];

x.splice(0, 1);
// a

x.splice(2, 0, "a");
// ["b", "c", "a", "d", "e"]
