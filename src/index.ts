let nama: string = "Romzi";
let nomer: number = 123;
let isDead: boolean = false;

let pacarSaya: number | string;
pacarSaya = "10 bro";

// array biasa
let array: string[];
array = ["Romzi", "Farhan", "Ghozi"];

// tuppel array
let tuple: [string, number, boolean];
tuple = ["Romzi", 25, true];

// Object
type TemanType = {
  nama: string;
  isKampret: boolean;
  hutang?: number;
};

let temanSaya: TemanType;

temanSaya = {
  nama: "Tesa",
  isKampret: true,
};

console.log({ nama });
console.log({ nomer });
console.log({ isDead });
console.log({ pacarSaya });
console.log({ array });
console.log({ tuple });
console.log(temanSaya);
