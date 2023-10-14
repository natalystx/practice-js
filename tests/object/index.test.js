import { createObject, addAttribute, removeAttribute, mergeObject } from "../../practices/object";
import { faker } from "@faker-js/faker";

faker.seed(6789);
const user = { firstName: faker.person.firstName(), lastName: faker.person.lastName() };
const user2 = { firstName: faker.person.firstName(), lastName: faker.person.lastName(), age: faker.number.int() };

const getMergeObject = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

describe("Object Checker", () => {
  test("create-object.js", () => {
    expect(createObject).toBeDefined();
    expect(createObject()).toStrictEqual({ firstName: "John", lastName: "Doe" });
  });

  test("add-attribute.js", () => {
    expect(addAttribute).toBeDefined();
    expect(addAttribute({ ...user }, "age", 20)).toStrictEqual({ ...user, age: 20 });
    const age = faker.number.int();
    expect(addAttribute({ ...user2 }, "age", age)).toStrictEqual({ ...user2, age });
  });

  test("remove-attribute.js", () => {
    expect(removeAttribute).toBeDefined();
    expect(removeAttribute({ ...user }, "age")).toStrictEqual({ ...user });
    expect(removeAttribute({ ...user }, "firstName")).toStrictEqual({ lastName: user.lastName });
    faker.seed(Math.random() * 10000);
    const key = faker.number.int();
    const value = faker.number.int();
    expect(removeAttribute({ ...user, [key]: value }, key)).toStrictEqual({ ...user });
  });

  test("merge-object.js", () => {
    expect(mergeObject).toBeDefined();
    expect(mergeObject(user, user2)).toStrictEqual(getMergeObject(user, user2));
    expect(mergeObject(user2, user)).toStrictEqual(getMergeObject(user2, user));
    expect(mergeObject(user2, {})).toStrictEqual(getMergeObject(user2, {}));
  });
});
