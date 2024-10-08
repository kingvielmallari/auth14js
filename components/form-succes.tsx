import { CheckCircledIcon } from "@radix-ui/react-icons";
import React from "react";

interface FormSuccessProps {
    message?: string;
};

export const FormSuccess = ({
    message,
}: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="bg-emerald-500/15 p-3 rounded-md flex item-center gap-x-2 text-sm text-emerald-500">
            <CheckCircledIcon className="h-5 w-4"/>
            <p>{message}</p>
        </div>
    )
}