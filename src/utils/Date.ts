import { format, fromUnixTime } from "date-fns";

export const formatTransactionTime = (hexTimestamp: string): string => {
  const timestamp = parseInt(hexTimestamp, 16);
  const date = fromUnixTime(timestamp);
  return format(date, "yyyy-MM-dd ");
};
