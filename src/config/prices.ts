import { USER_TYPE, ITEM_TYPE } from ".";

export const DEFAULT_PRICE = 100;

export const PRICES = {
  discount: {
    [USER_TYPE.person]: 0,
    [USER_TYPE.company]: 5,
    lastDay: 10,
  },
  cost: {
    [ITEM_TYPE.auction]: 25,
    [ITEM_TYPE.buyNow]: 35,
  },
};
