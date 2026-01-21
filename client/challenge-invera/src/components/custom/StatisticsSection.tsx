import type { UserTypeDistributionI } from "@/types/dbResponse/userTypes.response";
import { Card, CardContent } from "@/components/ui/card";
import { UsersRadialChart } from "./UsersRadialChart";
import { useUsersTypes } from "@/hooks/useUsersTypes";
import { StatisticsSectionSkeleton } from "../loading/SkeletonStatisticsSection";

interface Props {
  title: string;
}

export const StatisticsSection = ({ title = "" }: Props) => {
  const { data, isLoading } = useUsersTypes();

  if (isLoading) {
    return <StatisticsSectionSkeleton />;
  }

  return (
    <Card className="bg-card">
      <CardContent className="p-6">
        {data && (
          <>
            <h3 className="mb-6 text-lg font-semibold">{title}</h3>
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-evenly">
              <UsersRadialChart
                totalUsers={data.totalUsers}
                distribution={data.distribution}
              />

              <ul className="space-y-3 text-sm">
                {data.distribution.map(
                  (elem: UserTypeDistributionI, index: number) => (
                    <li
                      key={elem.type}
                      className="flex items-center justify-between gap-10"
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: `var(--color-chart-${index + 1})`,
                          }}
                        />
                        {elem.type}
                      </span>
                      <span>{elem.percentage}%</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
