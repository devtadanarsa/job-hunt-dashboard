"use client";

import { Button } from "@/components/ui/button";
import { url } from "inspector";
import { MoreVerticalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ButtonActionTableProps {
  url: string;
}

const ButtonActionTableProps: FC<ButtonActionTableProps> = ({ url }) => {
  const router = useRouter();

  return (
    <Button size="icon" variant="outline" onClick={() => router.push(url)}>
      <MoreVerticalIcon className="w-4 h-4" />
    </Button>
  );
};

export default ButtonActionTableProps;
