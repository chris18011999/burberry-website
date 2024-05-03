import { Spinner } from "@nextui-org/react";

export default function CategoryLoader() {
  return <main className="flex flex-col items-center justify-content-center gap-4">
      <div className="flex items-center gap-3">
        <Spinner />
        Loading
      </div>
  </main>
}