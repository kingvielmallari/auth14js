import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is invalid",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is invalid",
    }),
    password: z.string().min(6, {
        message: "Minimum of 6 characters",
    }),
    studentid: z.string().min(8, {
        message: "Invalid Student ID",
    })

})