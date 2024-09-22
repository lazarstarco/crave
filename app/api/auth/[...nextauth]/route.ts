import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/utils/db";
import { JWT } from "next-auth/jwt";
interface CustomJWT extends JWT {
  id?: string;
  role?: string;
}

interface CustomUser {
  id: string;
  name: string;
  email: string;
  role: string;
}
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await prisma.user.findFirst({
            where: { email: credentials?.email },
          });

          if (
            user &&
            bcrypt.compareSync(credentials?.password || "", user.password!)
          ) {
            return {
              id: user.id,
              email: user.email,
              role: user.role,
            } as CustomUser;
          }
        } catch (err: any) {
          throw new Error(err);
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token as CustomJWT;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
