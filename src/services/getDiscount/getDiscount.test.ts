import { getDiscount } from "./getDiscount";
import { isToday } from "../isToday/isToday";
import { test, expect, vi, beforeEach, afterEach, describe } from "vitest";
import { USER_TYPE } from "../../config";

vi.mock("../isToday/isToday", () => {
  return {
    isToday: vi.fn(),
  };
});

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
    vi.doUnmock("../isToday/isToday");
  });

  describe("getDiscount", () => {
    describe("Company type", () => {
      test("returns 15 (company + last day) when endDate is today", () => {
        vi.mocked(isToday).mockReturnValue(true);

        const discount = getDiscount(USER_TYPE.company, sameDate);

        expect(isToday).toHaveBeenCalled();
        expect(isToday).toHaveBeenCalledWith(sameDate);
        expect(discount).toEqual(15);
      });

      test("returns 5 (company) when endDate is not today", () => {
        vi.mocked(isToday).mockReturnValue(false);
        const discount = getDiscount(USER_TYPE.company, otherDate);

        expect(isToday).toHaveBeenCalled();
        expect(isToday).toHaveBeenCalledWith(sameDate);
        expect(discount).toEqual(5);
      });
    });

    describe("Person type", () => {
      test("returns 10 (last day) when endDate is today", () => {
        vi.mocked(isToday).mockReturnValue(true);
        const discount = getDiscount(USER_TYPE.person, sameDate);

        expect(isToday).toHaveBeenCalled();
        expect(isToday).toHaveBeenCalledWith(sameDate);
        expect(discount).toEqual(10);
      });

      test("returns 0 when endDate is not today", () => {
        vi.mocked(isToday).mockReturnValue(false);
        const discount = getDiscount(USER_TYPE.person, otherDate);

        expect(isToday).toHaveBeenCalled();
        expect(isToday).toHaveBeenCalledWith(sameDate);
        expect(discount).toEqual(0);
      });
    });
  });
});
