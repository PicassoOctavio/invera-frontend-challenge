import { Badge } from "@/components/ui/badge";

interface Props {
  status: string;
}

export const UserStatus = ({ status }: Props) => {
  const online = status === "online";

  return (
    <Badge
      className={
        online
          ? "bg-green-500/20 text-green-400"
          : "bg-muted text-muted-foreground"
      }
    >
      {status}
    </Badge>
  );
};
