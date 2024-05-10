"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import Link from "next/link";
import { useParams } from "next/navigation";

export function NavbarTrees({ trees }: { trees: T_Tree[] }) {
  const params = useParams();
  const { id: paramTreeID } = params;

  return trees.map((tree) => {

    const isTreeActive = Number(paramTreeID) == tree.id;
    const variant: ButtonProps["variant"] = isTreeActive ? "bordered" : "bordered";
    const color: ButtonProps["color"] = isTreeActive ? "success" : "default";
    return (
      <Link key={tree.id} href={`/${tree.slug}/${tree.id}`}>
        <Button variant={variant} color={color}>{tree.name}</Button>
      </Link>
    );
  });
}