import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface userAvatarProps {
  imgUrl: string | undefined;
  className: string;
}

export function UserAvatar({ imgUrl, className }: userAvatarProps) {
  return (
    <Avatar className={cn("h-7 w-7 md:h-10 md:w-10", className)}>
      <AvatarImage src={imgUrl} />
    </Avatar>
  );
}
