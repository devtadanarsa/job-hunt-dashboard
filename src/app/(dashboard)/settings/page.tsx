import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewForm from "@/components/forms/OverviewForm";
import SocialMediaForm from "@/components/forms/SocialForm";
import TeamForm from "@/components/forms/TeamForm";
import { getServerSession } from "next-auth";
import prisma from "../../../../lib/prisma";
import { authOptions } from "@/lib/utils";

export const revalidate = 0;

async function getCompanyDetail() {
  const session = await getServerSession(authOptions);

  const companyDetail = await prisma.company.findFirst({
    where: { id: session?.user.id },
    include: {
      CompanyOverview: true,
      CompanySocialMedia: true,
      CompanyTeam: true,
    },
  });

  return companyDetail;
}

const SettingsPage = async () => {
  const companyDetail = await getCompanyDetail();

  return (
    <div>
      <div className="font-semibold text-3xl mb-5">Settings</div>
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="social-links">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm detail={companyDetail?.CompanyOverview[0]} />
        </TabsContent>
        <TabsContent value="social-links">
          <SocialMediaForm detail={companyDetail?.CompanySocialMedia[0]} />
        </TabsContent>
        <TabsContent value="teams">
          <TeamForm detail={companyDetail?.CompanyTeam} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
