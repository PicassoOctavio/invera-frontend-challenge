import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"; //

export const StatisticsSectionSkeleton = () => {
  return (
    <Card className="bg-card">
      <CardContent className="p-6">
        <Skeleton className="mb-6 h-6 w-48" /> {/* Título placeholder */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-evenly">
          {/* Círculo placeholder para el gráfico radial */}
          <Skeleton className="size-52 rounded-full" />

          <ul className="space-y-3 text-sm">
            {/* Elementos de lista placeholder */}
            {[...Array(3)].map((_, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-10"
              >
                <span className="flex items-center gap-2">
                  <Skeleton className="h-2 w-2 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </span>
                <Skeleton className="h-4 w-10" />
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
