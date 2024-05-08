"use server";
import { redirect } from "next/navigation";

export async function handleSearch(formData: FormData) {
  const search_term = formData.get("search_term")?.toString();

  if (!search_term || search_term.length < 3) {
    return;
  }

  redirect(`/search/?search_term=${search_term}`);
}
