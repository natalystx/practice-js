import { add, hello, matcher, callback, hof } from "../../practices/function";

const possibleNames = (name) => {
  let names = [name];
  const splittedText = name.split("");
  const length = name.length;

  for (let index = 0; index < 2; index++) {
    new Array(length).fill(0).forEach((_, i) => {
      const newName = splittedText.map((c, j) => (j === i ? (index === 0 ? c.toLowerCase() : c.toUpperCase()) : c)).join("");
      names.push(newName);
    });
  }

  return names;
};

describe("Function Checker", () => {
  test("hello.js", () => {
    expect(hello).toBeDefined();
    expect(hello()).toEqual("Hello");
  });

  test("add.js", () => {
    expect(add).toBeDefined();
    expect(add(2, 5)).toEqual(7);
    expect(add("2", 5)).toEqual(7);
    expect(add(2.5, 3.2)).toEqual(5.7);
    expect(add(2.5, "3.2")).toEqual(5.7);
    expect(add(2)).toEqual(null);
    expect(add(2, null)).toEqual(null);
    expect(add("a", "b")).toEqual(null);
  });

  test("matcher.js", () => {
    expect(matcher).toBeDefined();
    expect(matcher()).toEqual(null);
    const jack = possibleNames("Jack");
    const tom = possibleNames("Tom");
    const louis = possibleNames("Louis");
    const steven = possibleNames("Steven");

    jack.forEach((name) => {
      expect(matcher(name)).toEqual("Orange");
    });
    tom.forEach((name) => {
      expect(matcher(name)).toEqual("Apple");
    });
    louis.forEach((name) => {
      expect(matcher(name)).toEqual("Grape");
    });
    steven.forEach((name) => {
      expect(matcher(name)).toEqual("Banana");
    });

    expect(matcher("Christ")).toEqual(null);
    expect(matcher(Date.now().toString())).toEqual(null);
  });

  test("callback.js", () => {
    expect(callback).toBeDefined();
    const fn = jest.fn();
    expect(callback(fn)).toEqual(null);
    expect(fn).toBeCalled();
    expect(callback(() => "hi")).toEqual("hi");
    expect(callback(() => 2)).toEqual(2);
    expect(callback(() => [])).toEqual([]);
    expect(callback(() => undefined)).toEqual(null);
    expect(callback(() => null)).toEqual(null);
    expect(
      callback(() => {
        return { a: 2 };
      }),
    ).toStrictEqual({ a: 2 });
  });

  test("high-order-function.js", () => {
    const fn = jest.fn().mockImplementation((a, b) => a + b);
    expect(hof).toBeDefined();
    expect(hof(fn, 2, 5)).toEqual(7 * 7);
    expect(fn).toBeCalled();
    expect(hof(fn, 2.23, 24.56)).toEqual(26.79 * 26.79);
    expect(hof(fn, -2.23, -24.56)).toEqual(-26.79 * -26.79);
    const a = Math.random() * 1000;
    const b = Math.random() * 1000;
    expect(hof(fn, a, b)).toEqual((a + b) * (a + b));
  });
});
