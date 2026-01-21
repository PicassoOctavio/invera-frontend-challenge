import type { UserTypeDistributionI } from "@/types/userTypes.response";

interface ChartDataItem {
  name: string;
  value: number;
  fill: string;
}

export const transformDistributionToChartData = (
  distribution: Array<UserTypeDistributionI>,
): Array<ChartDataItem> => {
  if (distribution) {
    const mappedData = distribution.map((item, index) => ({
      name: item.type,
      value: Number(item.percentage),
      fill: `var(--color-chart-${index + 1})`,
    }));
    return mappedData;
  } else {
    return [];
  }
};
