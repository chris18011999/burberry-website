"use client";

import { Button as ClientButton, ButtonProps } from "@nextui-org/react";

export function Button({ ...props }: ButtonProps & { is_selected?: boolean }) {
  let bgColor = !props.is_selected ? "bg-transparent" : "bg-transparent";
  let textColor = !props.is_selected ? "text-slate-600" : "text-slate-600";
  let border = !props.is_selected
    ? "border-b-none"
    : "border-b-1 border-primary-500";
  return (
    <ClientButton
      {...props}
      className={`py-2 px-3 ${bgColor} ${textColor} rounded-none hover:text-slate-900 hover:bg-slate-100 ${border} transition`}
    ></ClientButton>
  );
}
