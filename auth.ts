import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "./src/generated/prisma";
import { inferAdditionalFields } from "better-auth/client/plugins";

const prisma = new PrismaClient();


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
    plugins: [inferAdditionalFields()],
})

export type Session = typeof auth.$Infer.Session