import { isToday } from "./isToday";
import { test, expect, vi, beforeEach, afterEach, describe } from "vitest";

const sameDate = "2000-01-01";
const otherDate = "2029-01-01";

describe("isToday", () => {
  beforeEach(() => {
    const date = new Date(2000, 0, 1);
    vi.useFakeTimers();
    vi.setSystemTime(date);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("returns true when endDate is today", () => {
    const result = isToday(sameDate);

    expect(result).toEqual(true);
  });

  test("returns false when endDate is not today", () => {
    const result = isToday(otherDate);

    expect(result).toEqual(false);
  });
});
