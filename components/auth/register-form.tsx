"use client";

import * as z from "zod";

import { useState, useTransition } from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RegisterSchema } from "@/schemas";  
import { Input } from "@/components/ui/input";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { CardWrapper } from '@/components/auth/card-wrapper';
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-succes";
import { register } from "@/actions/register";


  
export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            studentid: ""
        },
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess(""); 

        startTransition(() => {
            register(values)
             .then((data) => {
                setError(data.error); 
                setSuccess(data.success);
             });
        });
    };


    const [studentId, setStudentId] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 8) value = value.slice(0, 8); // Limit to 8 digits
        if (value.length > 4) value = value.slice(0, 4) + '-' + value.slice(4); // Add hyphen after 4 digits
        setStudentId(value);
    };



    return (
        <CardWrapper
            headerLabel="Create an Account"
            backButtonLabel="Already have account?"
            backButtonHref="/auth/login"
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 }"
                  
                >
                    <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="studentid"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Student ID</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={studentId}
                                        onChange={(e) => {
                                            handleChange(e);
                                            field.onChange(e); // Update form state
                                        }}
                                        disabled={isPending}
                                        type="text"
                                        placeholder="2024-1456"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type="email"
                                            placeholder="klmallari@gmail.com"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type="password"
                                            placeholder="********"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                    >
                        Create an Account
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
    }

