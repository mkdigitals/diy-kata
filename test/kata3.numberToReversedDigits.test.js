const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toBe(54321);
    expect(numberToReversedDigits(2468)).toBe(8642);
    expect(numberToReversedDigits(358)).toBe(853);
    expect(numberToReversedDigits(12321)).toBe(12321);
    expect(numberToReversedDigits(9)).toBe(9);
    expect(numberToReversedDigits(1000)).toBe(1);
  });
});
