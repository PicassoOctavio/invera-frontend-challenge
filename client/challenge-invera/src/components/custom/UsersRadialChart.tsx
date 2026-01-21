import { transformDistributionToChartData } from "@/helpers/transformDistributionToData";
import type { UserTypesI } from "@/types/userTypes.response";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

export const UsersRadialChart = ({ totalUsers, distribution }: UserTypesI) => {
  const data = transformDistributionToChartData(distribution);

  if (!data.length) return null;

  const formatNumberToK = (num: number): string => {
    if (num >= 1000) {
      return `${Math.floor(num / 1000)}k`;
    }
    return num.toString();
  };

  return (
    <RadialBarChart
      width={200}
      height={200}
      innerRadius="70%"
      outerRadius="100%"
      data={data}
      startAngle={90}
      endAngle={-270}
    >
      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
      <RadialBar dataKey="value" cornerRadius={10} />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-foreground text-xl font-semibold"
      >
        {totalUsers && formatNumberToK(totalUsers)}
      </text>
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        className="fill-muted-foreground text-sm"
      >
        users
      </text>
    </RadialBarChart>
  );
};
