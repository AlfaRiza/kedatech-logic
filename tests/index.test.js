const Utils = require("../src/index");

describe("Sort By Descending", () => {
  it("should be can sort descending", () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1];
    const result = Utils.SortDescending(input);

    expect(result).toStrictEqual([5, 4, 3, 3, 2, 2, 1, 1]);
  });
});

describe("Max Sum", () => {
  it("should be can get max sum from array with number 2", () => {
    const input = [100, 200, 300, 400];
    const result = Utils.maxSum(input, 2);

    expect(result).toBe(700);
  });

  it("should be can get max sum from array with number 4", () => {
    const input = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    const result = Utils.maxSum(input, 4);

    expect(result).toBe(39);
  });

  it("should be can get max sum from array with number 2", () => {
    const input = [-3, 4, 0, -2, 6, -1];
    const result = Utils.maxSum(input, 2);

    expect(result).toBe(5);
  });

  it("should be can return null when number more than array length", () => {
    const input = [-3, 4];
    const result = Utils.maxSum(input, 5);

    expect(result).toBe(null);
  });
});

describe("Nested Object", () => {
  it("should be can count number nested object case 1", () => {
    const input = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };

    const result = Utils.nestedObject(input);
    expect(result).toBe(6);
  });

  it("should be can count number nested object case 2", () => {
    const input = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    };

    const result = Utils.nestedObject(input);
    expect(result).toBe(12);
  });
});
