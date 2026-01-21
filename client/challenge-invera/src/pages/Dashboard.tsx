import { useState } from "react";
import { PageHeader } from "../components/custom/PageHeader/PageHeader";
import { StatisticsSection } from "../components/custom/StatisticsSection/StatisticsSection";
import { StatsGrid } from "../components/custom/StatsGrid";
import { UsersTable } from "../components/custom/UsersTable";
import { UserModal } from "../components/custom/UserModal";
import type { User } from "../types/dbResponse/users.response";

export const Dashboard = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleAddNewUser = () => {
    setSelectedUser(null);
    setIsUserModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsUserModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsUserModalOpen(false);
    setSelectedUser(null);
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

      <UsersTable onEditUser={handleEditUser} />

      <UserModal
        isOpen={isUserModalOpen}
        onClose={handleCloseModal}
        user={selectedUser}
      />
    </div>
  );
};
