import { Hash } from "lucide-react";
import { MobileToggle } from "../mobile-toggle";
import { Avatar } from "../ui/avatar";
import { UserAvatar } from "../user-avatar";

interface chatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imgUrL?: string;
}

export const ChatHeader = ({
  serverId,
  name,
  type,
  imgUrL,
}: chatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 w-[100vw]">
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
      )}
      {type === "conversation" && (
        <UserAvatar imgUrl={imgUrL} className="h-8 w-8 md:h-8 md:w-8 mr-2" />
      )}
      <p className="font-semibold text-md text-black dark:text-white ">
        {name}
      </p>
    </div>
  );
};
