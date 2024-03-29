import { Spinner } from "@nextui-org/react";

export default function ProductDetailsLoading() {

    return <main className="p-24 flex flex-col items-center justify-center gap-4">
        <div>Loading product...</div>
        <Spinner size="lg"></Spinner>
    </main>
}