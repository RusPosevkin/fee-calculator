import { isToday } from "../isToday/isToday";
import { USER_TYPE, PRICES } from "../../config";

export const getDiscount = (userType: string, endDate: string) => {
  const isCompany = userType === USER_TYPE.company;
  let discount = isCompany ? PRICES.discount.company : PRICES.discount.person;

  if (isToday(endDate)) {
    discount += PRICES.discount.lastDay;
  }

  return discount;
};
