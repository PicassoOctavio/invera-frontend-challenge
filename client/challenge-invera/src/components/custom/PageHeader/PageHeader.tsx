import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  btnTitle: string;
  handleClick: () => void;
}

export const PageHeader = ({
  title = "",
  btnTitle = "",
  handleClick,
}: Props) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-semibold">{title}</h1>

      <Button
        onClick={handleClick}
        className="bg-primary text-primary-foreground"
      >
        {btnTitle}
      </Button>
    </div>
  );
};
