import moment from "moment";
import { ITEM_TYPE, USER_TYPE } from "./config";

export const isToday = (endDate) => {
  return moment(endDate).isSame(moment(), "day");
};

export const getFee = ({ userType, itemType, price, endDate }) => {
  switch (userType) {
    case USER_TYPE.person: //Normal
      if (itemType === ITEM_TYPE.auction) {
        //Auction
        let endDateDiscount = 0;
        // const isToday = moment(endDate).isSame(moment(), "day");
        if (isToday(endDate)) {
          endDateDiscount = 10;
        }
        return price + 25 - endDateDiscount;
      } else if (itemType === ITEM_TYPE.buyNow) {
        //BuyItNow
        return price + 35 - 0;
      }
      break;
    case USER_TYPE.company: //Company
      if (itemType === ITEM_TYPE.auction) {
        //Auction
        // const isToday = moment(endDate).isSame(moment(), "day");
        if (isToday(endDate)) {
          return price + 25 - 15; // Enddate discount and company discount
        }

        return price + 25 - 5; // Only company discount
      } else if (itemType === ITEM_TYPE.buyNow) {
        //BuyItNow
        return price + 35 - 5;
      }
      break;
    default:
      throw new Error("Unknown user type");
  }
};
