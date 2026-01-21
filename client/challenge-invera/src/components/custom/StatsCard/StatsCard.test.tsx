import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatsCard } from "./StatsCard";
import { Users } from "lucide-react";

describe("StatsCard", () => {
  it("renders correctly with props", () => {
    render(
      <StatsCard
        title="Total Users"
        value={150000}
        icon={<Users data-testid="icon" />}
      />,
    );

    expect(screen.getByText("Total Users")).toBeInTheDocument();
    expect(screen.getByText("150000")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
