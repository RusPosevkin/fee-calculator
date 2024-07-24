import moment from "moment";

export const isToday = (endDate) => {
  return moment(endDate).isSame(moment(), "day");
};
