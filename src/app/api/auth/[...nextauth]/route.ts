import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../lib/prisma";
import { comparePassword } from "@/lib/utils";
import { authOptions } from "@/lib/utils";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
