import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"



import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user";

 
export default {
    providers: [
        Credentials({

            async authorize(credentials) {
                const validatedField = LoginSchema.safeParse(credentials);

                if (validatedField.success) {
                    const { email, password } = validatedField.data;

                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password,
                    );

                    if (passwordsMatch) return user;
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig