import ButtonActionTableProps from "@/components/organisms/ButtonActionTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from "@/constants";
import { MoreVerticalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import prisma from "../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { Job } from "@prisma/client";
import { dateFormat } from "@/lib/utils";
import moment from "moment";

async function getJobData() {
  const session = await getServerSession();

  const jobs = prisma.job.findMany({
    where: {
      companyId: session?.user.id,
    },
  });

  return jobs;
}

const JobListingsPage = async () => {
  const jobs = await getJobData();

  return (
    <div>
      <div className="font-semibold text-3xl"></div>
      <div className="mt-10">
        <Table>
          <TableHeader>
            <TableRow>
              {JOB_LISTING_COLUMNS.map((item: string, i: number) => (
                <TableHead key={item + i}>{item}</TableHead>
              ))}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((item: Job, i: number) => (
              <TableRow key={i}>
                <TableCell>{item.roles}</TableCell>
                <TableCell>
                  {moment(item.datePosted).isBefore(item.dueDate) ? (
                    <Badge>Live</Badge>
                  ) : (
                    <Badge variant="destructive">Expired</Badge>
                  )}
                </TableCell>
                <TableCell>{dateFormat(item.datePosted)}</TableCell>
                <TableCell>{dateFormat(item.dueDate)}</TableCell>
                <TableCell>
                  <Badge variant="outline">{item.jobType}</Badge>
                </TableCell>
                <TableCell>
                  {item.applicants}/{item.needs}
                </TableCell>
                <TableCell>
                  <ButtonActionTableProps url={`job-detail/${item.id}`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default JobListingsPage;
