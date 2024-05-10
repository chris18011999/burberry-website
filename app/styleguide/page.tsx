import { Button } from "@/components/button";

export default function Styleguide() {
  return <main className="container mx-auto">
    <div className="flex flex-wrap gap-3">

    <Button key={1} radius="sm" variant="flat" color="primary">Some text</Button>
    <Button key={2} radius="sm" variant="flat" color="secondary">Some text</Button>
    <Button key={3} radius="sm" variant="flat" color="danger">Some text</Button>
    <Button key={4} radius="sm" variant="flat" color="default">Some text</Button>
    <Button key={5} radius="sm" variant="flat" color="success">Some text</Button>
    <Button key={6} radius="sm" variant="flat" color="warning">Some text</Button>
    </div>
  </main>
}