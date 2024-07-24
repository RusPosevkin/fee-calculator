import { getFee, getDiscount, isToday } from "./getFee";
import { test, expect, vi, beforeEach, afterEach, describe } from "vitest";
import { ITEM_TYPE, USER_TYPE } from "../../config";

const sameDate = "2000-01-01";
const otherDate = "2029-01-01";

describe("purchasing flow", () => {
  beforeEach(() => {
    const date = new Date(2000, 0, 1);
    vi.useFakeTimers();
    vi.setSystemTime(date);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("isToday", () => {
    test("returns true when endDate is today", () => {
      const result = isToday(sameDate);
      console.log(result);

      expect(result).toEqual(true);
    });

    test("returns false when endDate is not today", () => {
      const result = isToday(otherDate);
      console.log(result);

      expect(result).toEqual(false);
    });
  });

  describe("getDiscount", () => {
    describe("Company type", () => {
      test("returns 15 (company + last day) when endDate is today", () => {
        const discount = getDiscount(USER_TYPE.company, sameDate);
        console.log(discount);

        expect(discount).toEqual(15);
      });

      test("returns 5 (company) when endDate is not today", () => {
        const discount = getDiscount(USER_TYPE.company, otherDate);
        console.log(discount);

        expect(discount).toEqual(5);
      });
    });

    describe("Person type", () => {
      test("returns 10 (last day) when endDate is today", () => {
        const discount = getDiscount(USER_TYPE.person, sameDate);
        console.log(discount);

        expect(discount).toEqual(10);
      });

      test("returns 0 when endDate is not today", () => {
        const discount = getDiscount(USER_TYPE.person, otherDate);
        console.log(discount);

        expect(discount).toEqual(0);
      });
    });
  });

  describe("getFee", () => {
    describe("Company type", () => {
      describe("Auction", () => {
        test("returns 20 (10 + 25 - 15) when endDate is today", () => {
          const fee = getFee({
            userType: USER_TYPE.company,
            itemType: ITEM_TYPE.auction,
            price: 10,
            endDate: sameDate,
          });
          console.log(fee);

          expect(fee).toEqual(20);
        });

        test("returns 30 (10 + 25 - 5) when endDate is not today", () => {
          const fee = getFee({
            userType: USER_TYPE.company,
            itemType: ITEM_TYPE.auction,
            price: 10,
            endDate: otherDate,
          });
          console.log(fee);

          expect(fee).toEqual(30);
        });
      });
      describe("Buy It Now", () => {
        test("returns 30 (10 + 35 - 15) when endDate is today", () => {
          const fee = getFee({
            userType: USER_TYPE.company,
            itemType: ITEM_TYPE.buyNow,
            price: 10,
            endDate: sameDate,
          });
          console.log(fee);

          expect(fee).toEqual(30);
        });

        test("returns 40 (10 + 35 - 5) when endDate is not today", () => {
          const fee = getFee({
            userType: USER_TYPE.company,
            itemType: ITEM_TYPE.buyNow,
            price: 10,
            endDate: otherDate,
          });
          console.log(fee);

          expect(fee).toEqual(40);
        });
      });
    });

    describe("Person type", () => {
      describe("Auction", () => {
        test("returns 25 (10 + 25 - 10) when endDate is today", () => {
          const fee = getFee({
            userType: USER_TYPE.person,
            itemType: ITEM_TYPE.auction,
            price: 10,
            endDate: sameDate,
          });
          console.log(fee);

          expect(fee).toEqual(25);
        });

        test("returns 35 (10 + 25 - 0) when endDate is not today", () => {
          const fee = getFee({
            userType: USER_TYPE.person,
            itemType: ITEM_TYPE.auction,
            price: 10,
            endDate: otherDate,
          });
          console.log(fee);

          expect(fee).toEqual(35);
        });
      });
      describe("Buy It Now", () => {
        test("returns 35 (10 + 35 - 10) when endDate is today", () => {
          const fee = getFee({
            userType: USER_TYPE.person,
            itemType: ITEM_TYPE.buyNow,
            price: 10,
            endDate: sameDate,
          });
          console.log(fee);

          expect(fee).toEqual(35);
        });

        test("returns 45 (10 + 35 - 0) when endDate is not today", () => {
          const fee = getFee({
            userType: USER_TYPE.person,
            itemType: ITEM_TYPE.buyNow,
            price: 10,
            endDate: otherDate,
          });
          console.log(fee);

          expect(fee).toEqual(45);
        });
      });
    });
  });
});
