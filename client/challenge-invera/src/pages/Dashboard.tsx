import { PageHeader } from "@/components/PageHeader";
import { StatsGrid } from "@/components/StatsGrid";

export const Dashboard = () => {
  const handleAddNewUser = () => {
    console.log("handleAddNewUser()");
  };
  return (
    <div className="space-y-6 p-6">
      <PageHeader
        title="Users"
        btnTitle="Add User"
        handleClick={handleAddNewUser}
      />

      <StatsGrid />
    </div>
  );
};
