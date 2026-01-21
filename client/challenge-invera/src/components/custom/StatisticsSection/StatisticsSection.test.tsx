// src/components/custom/StatisticsSection/StatisticsSection.test.tsx
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatisticsSection } from "./StatisticsSection";

// Mock completo
vi.mock("@/hooks/useUsersTypes", () => ({
  useUsersTypes: vi.fn(() => ({
    data: {
      totalUsers: 150000,
      distribution: [
        { type: "Organic", percentage: "30" },
        { type: "Social", percentage: "50" },
        { type: "Direct", percentage: "20" },
      ],
    },
    isLoading: false,
  })),
}));

describe("StatisticsSection", () => {
  it("renders with title", () => {
    render(<StatisticsSection title="Statistics" />);
    expect(screen.getByText("Statistics")).toBeInTheDocument();
  });

  it("renders distribution items when data is available", () => {
    render(<StatisticsSection title="Statistics" />);

    // Verificar que se renderizan los elementos de distribución
    expect(screen.getByText("Organic")).toBeInTheDocument();
    expect(screen.getByText("30%")).toBeInTheDocument();
    expect(screen.getByText("Social")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("Direct")).toBeInTheDocument();
    expect(screen.getByText("20%")).toBeInTheDocument();
  });
});
