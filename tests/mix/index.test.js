import { mapper, sortById, getActiveUser, getMaxValueByKey } from "../../practices/mix";
import { faker } from "@faker-js/faker";

const users = new Array(100).fill(0).map(() => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  id: faker.number.int(),
  gender: faker.person.sex(),
  active: Date.now() % 2,
  age: faker.number.int(),
}));

const products = new Array(100).fill(0).map(() => ({
  id: 1,
  name: faker.commerce.productName(),
  weight: faker.number.float(),
  price: faker.number.int(),
  amount: faker.number.int(),
}));

const map = (data) => {
  return data.map((item) => {
    const name = `${item.firstName} ${item.lastName}`;
    return {
      name,
      active: !!item.active,
      age: `${item.age} y/o`,
    };
  });
};

const sort = (data) => {
  return data.sort((a, b) => a.id - b.id);
};

const activeUser = (data) => {
  return data.filter((item) => !!item.active);
};

const keyMax = (data, key) => {
  const keys = Object.keys(data[0]);
  if (!keys.includes(key)) return null;
  const max = data.sort((a, b) => b[key] - a[key])[0];

  return max;
};

describe("Mix Checker", () => {
  test("mapper.js", () => {
    expect(mapper).toBeDefined();
    expect(mapper(JSON.parse(JSON.stringify(users)))).toStrictEqual(map(JSON.parse(JSON.stringify(users))));
    expect(mapper(JSON.parse(JSON.stringify(users))).length).toEqual(users.length);
    expect(mapper([])).toStrictEqual(map([]));
  });

  test("sort-by-id.js", () => {
    expect(sortById).toBeDefined();
    expect(sortById(JSON.parse(JSON.stringify(users)))).toStrictEqual(sort(JSON.parse(JSON.stringify(users))));
    expect(sortById(JSON.parse(JSON.stringify(users))).length).toEqual(users.length);
    expect(sortById([])).toStrictEqual(sort([]));
  });

  test("get-active-user.js", () => {
    expect(getActiveUser).toBeDefined();
    expect(getActiveUser(JSON.parse(JSON.stringify(users)))).toStrictEqual(activeUser(JSON.parse(JSON.stringify(users))));
    expect(getActiveUser([])).toStrictEqual(activeUser([]));
  });

  test("get-max-value-by-key.js", () => {
    expect(getMaxValueByKey).toBeDefined();
    expect(getMaxValueByKey(JSON.parse(JSON.stringify(products)), "price")).toStrictEqual(
      keyMax(JSON.parse(JSON.stringify(products)), "price"),
    );
    expect(getMaxValueByKey(JSON.parse(JSON.stringify(products)), "amount")).toStrictEqual(
      keyMax(JSON.parse(JSON.stringify(products)), "amount"),
    );
    expect(getMaxValueByKey(JSON.parse(JSON.stringify(products)), "weight")).toStrictEqual(
      keyMax(JSON.parse(JSON.stringify(products)), "weight"),
    );
    expect(getMaxValueByKey(JSON.parse(JSON.stringify(products)), "location")).toStrictEqual(
      keyMax(JSON.parse(JSON.stringify(products)), "location"),
    );
  });
});
