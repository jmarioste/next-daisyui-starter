import { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error(
    "please provide process.env.NEXTAUTH_SECRET environment variable"
  );
}

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return await NextAuth(req, res, {
    providers: [
      //TODO: Create signIn mutation
      CredentialsProvider({
        name: "Credentials",
        id: "credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const validEmail = credentials?.email === "admin@example.com";
          const validPassword = credentials?.password === "@Password123";
          if (!validEmail || !validPassword) {
            throw new Error("Invalid Email or Password");
          }
          return {
            email: "admin@example.com",
            id: "random_id",
            name: "WebAdmin",
          };
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    pages: {
      signIn: "/signin",
    },
  });
}
