import { getFee } from "./getFee";
import moment from "moment";
import { test, expect } from "vitest";

test("getFee can calculate fee", () => {
  const fee = getFee({
    userType: 0,
    itemType: 0,
    price: 10,
    endDate: moment().format("YYYY-MM-DD"),
  });

  expect(fee).toBe(25);
});
