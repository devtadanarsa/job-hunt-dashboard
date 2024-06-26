import FieldInput from "@/components/organisms/FieldInput";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import React, { FC } from "react";
import AddTeamDialog from "./AddTeamDialog";
import { CompanyTeam } from "@prisma/client";

interface TeamFormProps {
  detail: CompanyTeam[] | undefined;
}

const TeamForm: FC<TeamFormProps> = ({ detail }) => {
  return (
    <FieldInput
      title="Basic Information"
      subtitle="Add team members to your company"
    >
      <div className="w-[65%] mb-5">
        <div className="flex flex-row justify-between items-center">
          <div className="text-lg font-semibold">2 Members</div>
          <AddTeamDialog />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-6">
          {detail?.map((item: CompanyTeam) => (
            <div key={item.id} className="p-3 shadow  text-center">
              <div className="w-14 h-14 rounded-full bg-gray-300 mx-auto"></div>
              <div className="mt-4 font-semibold">{item.name}</div>
              <div className="text-sm text-gray-500">{item.position}</div>
              <div className="mt-5 inline-flex mx-auto gap-3 text-gray-500">
                <InstagramIcon className="w-4 h-4" href={item.instagram} />
                <LinkedinIcon className="w-4 h-4" href={item.linkedin} />
              </div>
            </div>
          ))}

          {/* {[0, 1, 2].map((item: number) => (
            <div key={item} className="p-3 shadow  text-center">
              <div className="w-14 h-14 rounded-full bg-gray-300 mx-auto"></div>
              <div className="mt-4 font-semibold">Devta Danarsa</div>
              <div className="text-sm text-gray-500">CEO</div>
              <div className="mt-5 inline-flex mx-auto gap-3 text-gray-500">
                <InstagramIcon className="w-4 h-4" />
                <LinkedinIcon className="w-4 h-4" />
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </FieldInput>
  );
};

export default TeamForm;
