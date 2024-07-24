export const ITEM_TYPE = {
  auction: "auction",
  buyNow: "buyNow",
};

export const USER_TYPE = {
  person: "person",
  company: "company",
};

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
