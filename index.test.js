const { sum, unique, max, min } = require("./index");

test("Simple Sum reducer works", () => {
  expect([1, 2, 3, 4].reduce(sum)).toBe(10);
});

test("non Numeric Sum reducer works", () => {
  expect([1, null, undefined, "Non Parseble", "10"].reduce(sum)).toBe(1);
  expect([1, null].reduce(sum)).toBe(1);
  expect([undefined, 2].reduce(sum)).toBe(2);
  expect([undefined, null].reduce(sum)).toBe(0);
  expect([1, 2, null, undefined].reduce(sum)).toBe(3);
});

test("Simple Unique reducer works", () => {
  expect([1, 2, 3, 3, 4].reduce(unique)).toEqual([1, 2, 3, 4]);
});

test("Simple Min reducer works", () => {
  expect([1, 2, 3, 4].reduce(min)).toEqual(1);
});

test("Simple Max reducer works", () => {
  expect([1, 2, 3, 4].reduce(max)).toEqual(4);
});
