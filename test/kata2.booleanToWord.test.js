const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns 'Yes' when passed true, 'No' when passed false", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
