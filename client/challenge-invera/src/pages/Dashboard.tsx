import { PageHeader } from "@/components/custom/PageHeader";
import { StatisticsSection } from "@/components/custom/StatisticsSection";
import { StatsGrid } from "@/components/custom/StatsGrid";

export const Dashboard = () => {
  const handleAddNewUser = () => {
    console.log("handleAddNewUser()");
  };
  return (
    <div className="space-y-6 p-6 2xl:mx-auto 2xl:max-w-7xl">
      <PageHeader
        title="Users"
        btnTitle="Add User"
        handleClick={handleAddNewUser}
      />

      <StatsGrid />
      <StatisticsSection title="Estadistics" />
    </div>
  );
};
