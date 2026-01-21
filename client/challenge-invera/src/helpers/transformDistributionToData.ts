import type { UserTypeDistributionI } from "@/types/dbResponse/userTypes.response";

interface ChartDataItem {
  name: string;
  value: number;
  fill: string;
}

export const transformDistributionToChartData = (
  distribution: Array<UserTypeDistributionI>,
): Array<ChartDataItem> => {
  if (distribution) {
    const colors = ["#4f46e5", "#10b981", "#6b7280"];

    const mappedData = distribution.map((item, index) => ({
      name: item.type,
      value: Number(item.percentage),
      fill: colors[index] || "#6b7280",
    }));
    return mappedData;
  } else {
    return [];
  }
};
