'use client'

import { NextUIProvider } from "@nextui-org/react";

export default function ClientNextUIProvider({ children }: {children: React.ReactNode}): React.ReactNode {
    return <NextUIProvider>
        {children}
    </NextUIProvider>
}