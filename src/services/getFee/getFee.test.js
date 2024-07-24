import { getFee } from "./getFee";
import { getDiscount } from "../getDiscount/getDiscount";
import { test, expect, vi, beforeEach, afterEach, describe } from "vitest";
import { ITEM_TYPE, USER_TYPE } from "../../config";

vi.mock("../getDiscount/getDiscount", () => {
  return {
    getDiscount: vi.fn(),
  };
});

const sameDate = "2000-01-01";
const otherDate = "2029-01-01";

describe("getFee", () => {
  beforeEach(() => {
    const date = new Date(2000, 0, 1);
    vi.useFakeTimers();
    vi.setSystemTime(date);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.doUnmock("../getDiscount/getDiscount");
  });

  describe("Company type", () => {
    describe("Auction", () => {
      test("returns 20 (10 + 25 - 15) when endDate is today", () => {
        vi.mocked(getDiscount).mockReturnValue(15);

        const fee = getFee({
          userType: USER_TYPE.company,
          itemType: ITEM_TYPE.auction,
          price: 10,
          endDate: sameDate,
        });
        expect(getDiscount).toHaveBeenCalled();
        expect(getDiscount).toHaveBeenCalledWith(USER_TYPE.company, sameDate);

        expect(fee).toEqual(20);
      });

      test("returns 30 (10 + 25 - 5) when endDate is not today", () => {
        vi.mocked(getDiscount).mockReturnValue(5);

        const fee = getFee({
          userType: USER_TYPE.company,
          itemType: ITEM_TYPE.auction,
          price: 10,
          endDate: otherDate,
        });

        expect(getDiscount).toHaveBeenCalled();
        expect(getDiscount).toHaveBeenCalledWith(USER_TYPE.company, sameDate);
        expect(fee).toEqual(30);
      });
    });
    describe("Buy It Now", () => {
      test("returns 30 (10 + 35 - 15) when endDate is today", () => {
        vi.mocked(getDiscount).mockReturnValue(15);

        const fee = getFee({
          userType: USER_TYPE.company,
          itemType: ITEM_TYPE.buyNow,
          price: 10,
          endDate: sameDate,
        });

        expect(getDiscount).toHaveBeenCalled();
        expect(getDiscount).toHaveBeenCalledWith(USER_TYPE.company, sameDate);
        expect(fee).toEqual(30);
      });

      test("returns 40 (10 + 35 - 5) when endDate is not today", () => {
        vi.mocked(getDiscount).mockReturnValue(5);

        const fee = getFee({
          userType: USER_TYPE.company,
          itemType: ITEM_TYPE.buyNow,
          price: 10,
          endDate: otherDate,
        });

        expect(getDiscount).toHaveBeenCalled();
        expect(getDiscount).toHaveBeenCalledWith(USER_TYPE.company, sameDate);
        expect(fee).toEqual(40);
      });
    });
  });

  describe("Person type", () => {
    describe("Auction", () => {
      test("returns 25 (10 + 25 - 10) when endDate is today", () => {
        vi.mocked(getDiscount).mockReturnValue(10);

        const fee = getFee({
          userType: USER_TYPE.person,
          itemType: ITEM_TYPE.auction,
          price: 10,
          endDate: sameDate,
        });

        expect(getDiscount).toHaveBeenCalled();
        expect(getDiscount).toHaveBeenCalledWith(USER_TYPE.person, sameDate);
        expect(fee).toEqual(25);
      });

      test("returns 35 (10 + 25 - 0) when endDate is not today", () => {
        vi.mocked(getDiscount).mockReturnValue(0);

        const fee = getFee({
          userType: USER_TYPE.person,
          itemType: ITEM_TYPE.auction,
          price: 10,
          endDate: otherDate,
        });

        expect(getDiscount).toHaveBeenCalled();
        expect(getDiscount).toHaveBeenCalledWith(USER_TYPE.person, sameDate);
        expect(fee).toEqual(35);
      });
    });
    describe("Buy It Now", () => {
      test("returns 35 (10 + 35 - 10) when endDate is today", () => {
        vi.mocked(getDiscount).mockReturnValue(10);

        const fee = getFee({
          userType: USER_TYPE.person,
          itemType: ITEM_TYPE.buyNow,
          price: 10,
          endDate: sameDate,
        });

        expect(getDiscount).toHaveBeenCalled();
        expect(getDiscount).toHaveBeenCalledWith(USER_TYPE.person, sameDate);
        expect(fee).toEqual(35);
      });

      test("returns 45 (10 + 35 - 0) when endDate is not today", () => {
        vi.mocked(getDiscount).mockReturnValue(0);

        const fee = getFee({
          userType: USER_TYPE.person,
          itemType: ITEM_TYPE.buyNow,
          price: 10,
          endDate: otherDate,
        });

        expect(getDiscount).toHaveBeenCalled();
        expect(getDiscount).toHaveBeenCalledWith(USER_TYPE.person, sameDate);
        expect(fee).toEqual(45);
      });
    });
  });

  describe("Incorrect user type", () => {
    test("throws an Error", () => {
      expect(() =>
        getFee({
          userType: null,
          itemType: ITEM_TYPE.buyNow,
          price: 10,
          endDate: otherDate,
        })
      ).toThrowError("Unknown user type");
    });
  });

  describe("Incorrect item type", () => {
    test("throws an Error", () => {
      expect(() =>
        getFee({
          userType: USER_TYPE.company,
          itemType: null,
          price: 10,
          endDate: otherDate,
        })
      ).toThrowError("Unknown item type");
    });
  });
});
