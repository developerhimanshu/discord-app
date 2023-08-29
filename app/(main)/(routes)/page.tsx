import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
export default function Home() {
  return (
    <div className="w-full flex justify-between py-2 px-3">
      <ModeToggle />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
