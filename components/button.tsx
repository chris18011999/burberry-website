"use client";

import { Button as ClientButton, ButtonProps } from "@nextui-org/react";

export function Button({ ...props }: ButtonProps & { is_selected?: boolean }) {

  return (
    <ClientButton
      {...props}
    ></ClientButton>
  );
}
