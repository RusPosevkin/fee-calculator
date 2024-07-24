import moment from "moment";

export const isToday = (endDate: string) => {
  return moment(endDate).isSame(moment(), "day");
};
