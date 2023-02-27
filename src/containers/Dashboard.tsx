import { Banners } from "components/Dashboard/Banners";
import { DashboardLayout } from "layouts/Dashboard";

export const DashboardContainer = () => {
  return (
    <DashboardLayout>
      {/* Banners Area */}
      <Banners />
    </DashboardLayout>
  );
};
