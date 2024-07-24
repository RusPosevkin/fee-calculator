import { getDiscount } from "../getDiscount/getDiscount";
import { USER_TYPE, PRICES, ITEM_TYPE } from "../../config";
import { NewItemType } from "../../common/types";

export const getFee = ({ userType, itemType, price, endDate }: NewItemType) => {
  if (!Object.values(USER_TYPE).includes(userType)) {
    throw new Error("Unknown user type");
  }

  if (!Object.values(ITEM_TYPE).includes(itemType)) {
    throw new Error("Unknown item type");
  }

  const discount = getDiscount(userType, endDate);
  const cost = PRICES.cost[itemType];

  return price + cost - discount;
};
