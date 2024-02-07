import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA } from "@/constants";
import ButtonActionTableProps from "../ButtonActionTable";

const Applicants = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANT_COLUMNS.map((item: string, i: number) => (
            <TableHead key={item + i}>{item}</TableHead>
          ))}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {JOB_APPLICANT_DATA.map((item: any, i: number) => (
          <TableRow key={i}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.appliedDate}</TableCell>
            <TableCell>
              <ButtonActionTableProps url="job-detail/1" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Applicants;
