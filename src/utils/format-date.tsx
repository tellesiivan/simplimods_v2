import format from "date-fns/format";

type FormatType = "human-readable-short" | "month-year";

export const formatDate = (
  date: Date,
  formatType: FormatType = "human-readable-short"
) => {
  switch (formatType) {
    case "human-readable-short":
      return format(date, "MMM dd yyyy");
    case "month-year":
      return format(date, "MMM yyyy");

    default:
      return format(date, "MMM dd yyyy");
  }
};
