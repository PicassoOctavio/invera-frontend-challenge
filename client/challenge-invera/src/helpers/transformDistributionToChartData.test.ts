// src/helpers/transformDistributionToChartData.test.ts
import { describe, expect, it } from "vitest";
import { transformDistributionToChartData } from "./transformDistributionToData";
import type { UserTypeDistributionI } from "@/types/dbResponse/userTypes.response";

describe("transformDistributionToChartData", () => {
  const mockDistribution: UserTypeDistributionI[] = [
    { type: "Organic", percentage: "30" },
    { type: "Social", percentage: "50" },
    { type: "Direct", percentage: "20" },
  ];

  it("transforms distribution data correctly", () => {
    const result = transformDistributionToChartData(mockDistribution);

    expect(result).toHaveLength(3);
    expect(result[0]).toEqual({
      name: "Organic",
      value: 30,
      fill: "#4f46e5",
    });
    expect(result[1]).toEqual({
      name: "Social",
      value: 50,
      fill: "#10b981",
    });
    expect(result[2]).toEqual({
      name: "Direct",
      value: 20,
      fill: "#6b7280",
    });
  });

  it("converts percentage strings to numbers", () => {
    const result = transformDistributionToChartData(mockDistribution);

    expect(typeof result[0].value).toBe("number");
    expect(result[0].value).toBe(30);
  });

  it("returns empty array for empty distribution", () => {
    const result = transformDistributionToChartData([]);
    expect(result).toEqual([]);
  });

  it("handles undefined distribution", () => {
    const result = transformDistributionToChartData(undefined);
    expect(result).toEqual([]);
  });

  it("handles invalid percentage values", () => {
    const invalidDistribution = [
      { type: "Test", percentage: "invalid" },
    ] as UserTypeDistributionI[];

    const result = transformDistributionToChartData(invalidDistribution);
    expect(result[0].value).toBeNaN();
  });
});
