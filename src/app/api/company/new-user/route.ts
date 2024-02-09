import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  const result = await prisma.company.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });

  return NextResponse.json(result);
}
