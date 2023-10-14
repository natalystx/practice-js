import { createArray, addItem, removeItem, replaceItem, mergeArray, sum2DimensionArray } from "../../practices/array";
import { faker } from "@faker-js/faker";

const getDeleteResult = (arr, i) => arr.filter((_, j) => j !== i);
const getReplaceResult = (arr, i, replacer) =>
  arr.map((item, j) => {
    if (i !== j) return item;
    return replacer;
  });
faker.seed(123);
const arr1 = new Array(10).fill(0).map(() => faker.animal.bird());
const numbers1 = new Array(10).fill(0).map(() => faker.number.float());
faker.seed(123);
const arr2 = new Array(30).fill(0).map(() => faker.animal.bird());
const numbers2 = new Array(30).fill(0).map(() => faker.number.float());

const merged = Array.from(new Set([...arr1, ...arr2]));
const mergedNumbers = Array.from(new Set([...numbers1, ...numbers2]));
const arr = ["lemon", "banana", "orange"];

faker.seed(Math.random());
const twoDimensionArray = new Array(100).fill(0).map(() => [faker.number.float(), faker.number.float()]);
const sum = (data) => {
  const reducer = (acc, n) => acc + n;
  const result = data.flat().reduce(reducer, 0);

  return result;
};

describe("Array Checker", () => {
  test("create-array.js", () => {
    expect(createArray).toBeDefined();
    expect(createArray()).toStrictEqual(arr);
  });

  test("add-item.js", () => {
    expect(addItem).toBeDefined();

    expect(addItem([...arr], "grape")).toStrictEqual(["lemon", "banana", "orange", "grape"]);
    expect(addItem(undefined, "grape")).toStrictEqual(null);
    expect(addItem()).toStrictEqual(null);
    expect(addItem([...arr])).toStrictEqual(arr);
    expect(addItem([], "grape")).toStrictEqual(["grape"]);
  });

  test("remove-item.js", () => {
    expect(removeItem).toBeDefined();
    expect(removeItem([...arr], "grape")).toStrictEqual(arr);
    expect(removeItem([...arr], "banana")).toStrictEqual(["lemon", "orange"]);

    const randomIndex = Math.floor(Math.random() * (arr.length - 1));
    expect(removeItem([...arr], arr[randomIndex])).toStrictEqual(getDeleteResult([...arr], randomIndex));
    expect(removeItem(undefined, "grape")).toStrictEqual(null);
    expect(removeItem()).toStrictEqual(null);
    expect(removeItem([...arr])).toStrictEqual(arr);
    expect(removeItem([], "grape")).toStrictEqual([]);
  });

  test("replace-item.js", () => {
    expect(replaceItem).toBeDefined();
    expect(replaceItem([...arr], "grape", "banana")).toStrictEqual(["lemon", "grape", "orange"]);
    expect(replaceItem([...arr], "banana")).toStrictEqual(["lemon", "banana", "orange"]);

    const randomIndex = Math.floor(Math.random() * (arr.length - 1));

    expect(replaceItem([...arr], "avocado", arr[randomIndex])).toStrictEqual(getReplaceResult([...arr], randomIndex, "avocado"));
    expect(replaceItem(undefined, "grape")).toStrictEqual(null);
    expect(replaceItem()).toStrictEqual(null);
    expect(replaceItem([...arr])).toStrictEqual(arr);
    expect(replaceItem([], "grape", "avocado")).toStrictEqual([]);
  });

  test("merge-array.js", () => {
    expect(mergeArray).toBeDefined();
    expect(mergeArray([...arr1], [...arr2])).toStrictEqual(merged);
    expect(mergeArray([...numbers1], [...numbers2])).toStrictEqual(mergedNumbers);
    expect(mergeArray([...numbers2], [])).toStrictEqual(numbers2);
  });

  test("2d-array.js", () => {
    expect(sum2DimensionArray).toBeDefined();
    expect(sum2DimensionArray([...twoDimensionArray])).toEqual(sum([...twoDimensionArray]));
  });
});
