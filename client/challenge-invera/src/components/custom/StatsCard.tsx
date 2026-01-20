import { Card, CardContent } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";

interface Props {
  title: string;
  value: number;
  icon: React.ReactNode;
}

export const StatsCard = ({ title, value, icon }: Props) => {
  return (
    <Card className="bg-card">
      <CardContent className="flex items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
            {icon}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-lg font-semibold">{value}</p>
          </div>
        </div>

        <MoreVertical className="h-4 w-4 text-muted-foreground" />
      </CardContent>
    </Card>
  );
};
