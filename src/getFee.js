import moment from "moment";

import { USER_TYPE, PRICES } from "./config";

export const isToday = (endDate) => {
  return moment(endDate).isSame(moment(), "day");
};

export const getDiscount = (userType, endDate) => {
  const isCompany = userType === USER_TYPE.company;
  let discount = isCompany ? PRICES.discount.company : PRICES.discount.person;

  if (isToday(endDate)) {
    discount += PRICES.discount.lastDay;
  }

  return discount;
};

export const getFee = ({ userType, itemType, price, endDate }) => {
  if (!Object.values(USER_TYPE).includes(userType)) {
    throw new Error("Unknown user type");
  }

  const discount = getDiscount(userType, endDate);
  const cost = PRICES.cost[itemType];

  return price + cost - discount;
};
