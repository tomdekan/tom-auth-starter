import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "./src/generated/prisma";
import { inferAdditionalFields } from "better-auth/client/plugins";
const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    user: {
       additionalFields: {
          role: {
              type: "string"
            } 
        }
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
    plugins: [], // keep empty for now
})

export type Session = typeof auth.$Infer.Session

// export interface SessionWithUser extends Session {
//   user: {
//     id: string;
//     name: string;
//     email: string;
//     emailVerified: boolean;
//     image?: string | null;
//   };
//   session: {
//     id: string;
//     expires: Date;
//     userId: string;
//   };
// }